import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

  arrPost:Post[]=[];
  constructor(private postService:PostsService) { }

  ngOnInit() {
    this.postService.getPost().subscribe(res=>{
      this.arrPost=res;
      console.log('post arr data',res)
    })
  }

}
