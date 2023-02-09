import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
age=25;
adress="Pandharpur";
pinCode=413304;
data="";
count:number=0;
imageUrl=`https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg`;
  constructor() { }

  ngOnInit() {
  }

  onButtonClick(){
   this.data="Event is triggered"; 
  }

  buttonIncreaseValue(){
    this.count++;
  }
  inputData="";
  valueKeyUp(value){
    this.inputData=value.target.value;
  }
}
