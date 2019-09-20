import { Component, OnInit } from '@angular/core';
import { Post } from '@app/_models/post';
import { PostService } from '@app/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.less']
})
export class CreatepostComponent implements OnInit {

  post:Post;
  tags:any[];

  constructor(private postService: PostService,private router: Router) { }

  ngOnInit() {
    this.post = new Post();
    this.post.type = "audio"
  }

  savePost(){
    let tagsValue:any[] = [];
    for(let tag of this.tags)
    {
      tagsValue.push(tag.value);
    }
    this.postService.savePost(this.post,tagsValue.join(',')).subscribe(x => {this.router.navigate(['/posts'])});
  }

}
