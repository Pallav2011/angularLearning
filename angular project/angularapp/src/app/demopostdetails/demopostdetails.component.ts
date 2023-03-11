import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-demopostdetails',
  templateUrl: './demopostdetails.component.html',
  styleUrls: ['./demopostdetails.component.css']
})
export class DemopostdetailsComponent implements OnInit {

  userDetails={};
  constructor(private route:ActivatedRoute, private postservice:PostsService) { }

  ngOnInit() {
    let id=this.route.snapshot.params['id'];
    this.postservice.getPostById(id).subscribe(res=>{
      this.userDetails=res;
      console.log('get post by id:',res);
    })  
  }

}
