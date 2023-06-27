import { Component, OnInit } from '@angular/core';
import { FirebasepracticeService } from '../service/firebasepractice.service';

@Component({
  selector: 'app-firebasepractice',
  templateUrl: './firebasepractice.component.html',
  styleUrls: ['./firebasepractice.component.css']
})
export class FirebasepracticeComponent implements OnInit {

  constructor(private firbaseserv:FirebasepracticeService) { }

  ngOnInit() {
  }
  myDetails={
    myName:'',
    myAge:0
  }

  create(name,age){
    this.myDetails.myName=name.value;
    this.myDetails.myAge=age.value;
    this.firbaseserv.postMyDetails(this.myDetails).subscribe(res=>{
      console.log(res);
    })
  }

  getData:any=[];

  get(){
    this.firbaseserv.getDetails().subscribe(res=>{
      this.getData.push(res);
      console.log(this.getData);
      
    })
  }
}
