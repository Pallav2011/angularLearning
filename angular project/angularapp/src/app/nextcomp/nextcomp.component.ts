import { Component, Input, OnInit } from '@angular/core';
import { FetchapiService } from '../service/fetchapi.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nextcomp',
  templateUrl: './nextcomp.component.html',
  styleUrls: ['./nextcomp.component.css']
})
export class NextcompComponent implements OnInit {

  @Input () child:any;
  APIdata:any=[];
  myLoginForm:FormGroup;
  constructor(private fetchapiservice:FetchapiService) { 
    this.createFormControl();
    console.log(this.myLoginForm);
    
  }

  ngOnInit() {
  }

  getAPIdata(){
    this.fetchapiservice.getData().subscribe(res=>{
      this.APIdata.push(res);
    })
  }

  createFormControl(){
    this.myLoginForm =new FormGroup({
      'userId':new FormControl(null),
      'password':new FormControl(null)
    })
  }

  showdata(){
    console.log(this.myLoginForm);
    
  }

}
