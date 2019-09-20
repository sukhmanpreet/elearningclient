import { Component, OnInit } from '@angular/core';
import { PostService } from '@app/post.service';
import { Post } from '@app/_models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private postservice: PostService) { }

  ngOnInit() {
      this.postservice.getAll().subscribe(posts => {this.posts = posts; });
  }

  like(postId: number) {
    this.postservice.like(postId).subscribe(posts => { this.posts.forEach(x => {
      if (x.postID === postId) {
        x.liked = !x.liked;
      }
    }); });
  }
}
