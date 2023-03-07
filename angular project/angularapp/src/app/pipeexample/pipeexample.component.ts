import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeexample',
  templateUrl: './pipeexample.component.html',
  styleUrls: ['./pipeexample.component.css']
})
export class PipeexampleComponent implements OnInit {
  todaysDate=new Date();
  price:number=7000;
  employee={
    empId:'1',
    empName:'Pandurang'
  }
  countLength:number=500;
  constructor() { }

  ngOnInit() {
  }

}
