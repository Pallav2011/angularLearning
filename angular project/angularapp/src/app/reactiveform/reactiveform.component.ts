import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myReactiveForm:FormGroup;
  isSubmitted:boolean=false;

  constructor() { 
    this.createMethod();
  }

  ngOnInit() {
  }

  createMethod(){
    this.myReactiveForm = new FormGroup({
      'userDetails':new FormGroup({
        'userName':new FormControl(null),
        'email':new FormControl(null,[Validators.required,Validators.email])
      }),
    //   'userName':new FormControl(null),
    //  'email':new FormControl(null,[Validators.required,Validators.email]),
      'male':new FormControl(null),
      'female':new FormControl(null),
      'other':new FormControl(null),
      'course':new FormControl('Angular')
    })
  }

  onSubmit(){
    this.isSubmitted=true;
    console.log(this.myReactiveForm);
    
  }
}
