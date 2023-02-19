import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

  isAgeValid:boolean=false;
  defaultCity='Mumbai';
  cities=['Mumbai','Kolkata','Delhi'];
  myPassword='';
  confirmPass:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  validAge(age){
    if(age.value>=17 && age.value<=20)
    {
      this.isAgeValid=false;
    }
    else{ 
    this.isAgeValid=true;  
    }
  }

  savePassword(password){
    this.myPassword=password.value;
  }

  checkPassword(confirmpassword){
    let cPassword=confirmpassword.value;
    if(this.myPassword === cPassword)
    { 
      this.confirmPass=false;
    }
    else{
      this.confirmPass=true;
    }
  }

  saveData(){
    alert("Congratulation, your account has been successfully created");
  }
}
