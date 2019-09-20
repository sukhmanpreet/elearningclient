import { Component, OnInit } from '@angular/core';
import { PostService } from '@app/post.service';
import { Post } from '@app/_models/post';
import { User, Role } from '@app/_models';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentUser: User;
  constructor(private postservice: PostService,private authenticationService: AuthenticationService) { }

  ngOnInit() {
      this.postservice.getAll().subscribe(posts => {this.posts = posts; });
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  } 


  like(postId: number) {
    this.postservice.like(postId).subscribe(posts => { this.posts.forEach(x => {
      if (x.postID === postId) {
        x.liked = !x.liked;
      }
    }); });
  }
}
