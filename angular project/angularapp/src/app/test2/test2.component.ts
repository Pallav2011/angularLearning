import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
firstName:string="Pandurang";
userName:string="";
imageUrl=`https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg`;
childData='I am Come From Child Component';
@Input() child:string;
@Output() fromChild : EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log(this.child);
    
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
  clearText(){
    this.userName="";
  }
  sendToParent(){
    this.fromChild.emit(this.childData);
  }
}
