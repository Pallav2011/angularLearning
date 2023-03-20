import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  myLoginForm:FormGroup;
  url='http://localhost:3000/users';
  // url='https://www.npmjs.com/package/json-server';
  constructor(private httpClient:HttpClient, private route:Router) { 
    this.createFormControls();
  }

  ngOnInit() {
  }

  createFormControls(){
    this.myLoginForm = new FormGroup({
      'email' : new FormControl('',[Validators.required,Validators.email]),
      'password' : new FormControl('',Validators.required)
    })
  }

  onSubmit(){
    this.httpClient.post(this.url,this.myLoginForm.value).subscribe(res=>{
     alert('data send successfully to the server'); 
    })
    console.log(this.myLoginForm);
    this.route.navigate(['/electroniclist']);
  }

}
