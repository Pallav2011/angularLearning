import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { GetusersService } from '../service/getusers.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  arrPost:Post[]=[];
  constructor(private getuser:GetusersService) { }

  ngOnInit() {
    this.getuser.getPost().subscribe(res=>{
      this.arrPost=res;
      console.log('post arr data',res)
    })
  }
}
