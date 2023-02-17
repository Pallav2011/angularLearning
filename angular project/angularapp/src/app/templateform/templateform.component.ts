import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
// emailFormat:`/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@CodemindTechnolgy.com`;
  defaultValue = 'Angular';
  defaultGender = 'Male';
  courses: string[] = ['Angular', 'Javascript', 'Typescript','HTML','CSS'];
  genders = [ 
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]
  emails='';

  isSubmitted: boolean = false;

  formData={
    email:'',
    password:'',
    course:'',
    gender:''
  }
  valueEmail='abc@codemind.com';
  constructor() { }

  ngOnInit() {
    // this.login=this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    // })
  }

  login(form: NgForm) {
    this.isSubmitted = true;
    console.log(form);
    this.formData.email = form.value.email;
    this.formData.password = form.value.password;
    this.formData.course = form.value.course;
    this.formData.gender = form.value.gender;
    form.controls['course'].setValue('Angular');
    form.controls['gender'].patchValue('Male');
// POST api/ Saveuser(formData);
  }

}
