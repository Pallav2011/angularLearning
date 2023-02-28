import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myReactiveForm:FormGroup;
  isSubmitted:boolean=false;
  notAllowedNames=['jack','harry'];

  constructor() { 
    this.createMethod();
  }

  ngOnInit() {
  }

  createMethod(){
    this.myReactiveForm = new FormGroup({
      'userDetails':new FormGroup({
        'userName':new FormControl(null,[Validators.required,this.naNames.bind(this)]),
        'email':new FormControl(null,[Validators.required,Validators.email])
      }),
      'male':new FormControl(null),
      'female':new FormControl(null),
      'other':new FormControl(null),
      'course':new FormControl('Angular'),
      'skills': new FormArray([new FormControl(null,Validators.required)])
    })
  }

  onSubmit(){
    this.isSubmitted=true;
    console.log(this.myReactiveForm);
  }

  onAddSkill(){
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null,Validators.required));
  }

  naNames(control:FormControl){
    if(this.notAllowedNames.indexOf(control.value)!==-1){
      return {'namesNotAllowed':true}
    }
    else{
      return null;
    }
  }


}
