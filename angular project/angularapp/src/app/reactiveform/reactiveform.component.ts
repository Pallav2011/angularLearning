import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { resolve } from 'url';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myReactiveForm:FormGroup;
  isSubmitted:boolean=false;
  notAllowedNames=['jack','harry'];
  age;
  showAge;

  constructor(private fb:FormBuilder) { 
    this.createMethod();
  }

  ngOnInit() {
    let objmyservice=new MyserviceService();
    objmyservice.print();
  }

  // ageCalculator(){
  //   let objmyservice=new MyserviceService();
  //   this.showAge = objmyservice.ageCalculator(this.age)
  // }

  createMethod(){
    // this.myReactiveForm = new FormGroup({
    //   'userDetails':new FormGroup({
    //     'userName':new FormControl(null,[Validators.required,this.naNames.bind(this)]),
    //     'email':new FormControl(null,[Validators.required,Validators.email], this.naEmails)
    //   }),
    //   'male':new FormControl(null),
    //   'female':new FormControl(null),
    //   'other':new FormControl(null),
    //   'course':new FormControl('Angular'),
    //   'skills': new FormArray([new FormControl(null,Validators.required)])
    // })
    this.myReactiveForm = this.fb.group({
      userDetails:this.fb.group({
      userName : ['',[Validators.required,this.naNames.bind(this)]],
      email:['',[Validators.required,Validators.email], this.naEmails]
      }),
      course:['Angular'],
      skills:this.fb.array([])
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
    if(this.notAllowedNames.indexOf(control.value) !==-1 ){
      return {'namesNotAllowed':true}
    }
    else{
      return null;
    }
  }

  naEmails(control:FormControl) : Promise<any>  | Observable<any>
  {
    const myResponce=new Promise<any> ((resolve,reject) => {
      setTimeout(() => {
        if(control.value=='codemindtechnology@gmail.com'){
          resolve({'emailNotAllowed':true})
        }
        else{
          resolve(null)
        }
      }, 5000);
    })
    return myResponce;
  }

  // ageCalculator(){
  //   if(this.age){
  //     const convertAge=new Date(this.age);
  //     const timeDiff=Math.abs(Date.now()-convertAge.getTime());
  //     this.showAge=Math.floor(timeDiff/(1000*3600*24)/365);
  //   }
  // }
}
