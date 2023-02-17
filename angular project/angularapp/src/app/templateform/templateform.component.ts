import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
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
  isEmailValid:boolean=false;

  formData={
    email:'',
    password:'',
    course:'',
    gender:''
  }
  constructor() { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.isSubmitted = true;
    console.log(form);
    this.formData.email = form.value.email;
    this.formData.password = form.value.password;
    this.formData.course = form.value.course;
    this.formData.gender = form.value.gender;
    // form.control['email'].setValue('');
    // form.control['password'].setValue('');
    form.controls['course'].setValue('Angular');
    form.controls['gender'].patchValue('Male');
  }
  checkEmail(email){
    const domain=email.value.substring(email.value.lastIndexOf('@')+1);
    if(domain.toLowerCase()==='codemindtechnology.com'){
      this.isEmailValid=false;
    }
    else{
      this.isEmailValid=true;
    }
  }

}
