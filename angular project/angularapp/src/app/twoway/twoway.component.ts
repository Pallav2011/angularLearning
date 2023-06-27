import { Component, OnInit } from '@angular/core';
import { FetchapiService } from '../service/fetchapi.service';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {
  
  value:string='pandurang';
  getData:any=[];
  myDetails=[
    {
      name:'pandurang',
      age:25,
      address:'pune',
      mobileNumber:91245437409
    },
    {
      name:'abc',
      age:21,
      address:'mumbai',
      mobileNumber:8523697411
    },
    {
      name:'xyz',
      age:30,
      address:'nashik',
      mobileNumber:9631234568
    }
  ];
  constructor(private apiservice:FetchapiService) { }

  ngOnInit() {
  
  }

  getDetails(){
      this.apiservice.getData().subscribe(res=>{
      this.getData.push(res);
      console.log('api data',this.getData);
    })
  }

}
