import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetusersService } from '../service/getusers.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userDetails={};
  constructor(private route:ActivatedRoute, private userservice:GetusersService) { }

  ngOnInit() {
    let id=this.route.snapshot.params['id'];
    this.userservice.getUserById(id).subscribe(res=>{
      this.userDetails=res;
      console.log('get user by id:',res);
    })  
  }

}
