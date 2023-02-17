import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myReactiveForm:FormGroup;

  constructor() { 
    this.createMethod();
  }

  ngOnInit() {
  }

  createMethod(){
    this.myReactiveForm = new FormGroup({
      'userName':new FormControl(null),
      'email':new FormControl(null)
    })
  }

  onSubmit(){
    console.log(this.myReactiveForm);
    
  }
}
