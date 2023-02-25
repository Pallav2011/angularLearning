import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveformassign2',
  templateUrl: './reactiveformassign2.component.html',
  styleUrls: ['./reactiveformassign2.component.css']
})
export class Reactiveformassign2Component implements OnInit {
  createUserForm:FormGroup;
  imageUrl='https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg';
  d = new Date();
  dt:string=this.d.toISOString();
  todayDate:string;
  indexOfT:number;
  arrayOfCountry=['India','UK','Chin','Japan','Jermany','Australiya','Ressia'];
  constructor() { 
    this.createControls();
    this.indexOfT=this.dt.indexOf('T');
    this.todayDate=this.dt.slice(0,this.indexOfT);
  }

  ngOnInit() {
  }

  createControls(){
    this.createUserForm = new FormGroup({
      'fullName': new FormControl(null,Validators.required),
      'date': new FormControl(null,Validators.required),
      'gender' : new FormControl(null,Validators.required),
      'country':new FormControl('India',Validators.required)
    })
  }

}
