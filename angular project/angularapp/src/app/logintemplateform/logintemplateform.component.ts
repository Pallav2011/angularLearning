import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-logintemplateform',
  templateUrl: './logintemplateform.component.html',
  styleUrls: ['./logintemplateform.component.css']
})
export class LogintemplateformComponent implements OnInit {

  myDetails={
    userid:'abcd',
    password:'123456',
    isValid:false
  }
  constructor() { }

  ngOnInit() {
  }

  save(form:NgForm){
    if (this.myDetails.userid==form.value.userid && this.myDetails.password==form.value.password) {
      alert('successfull');
      this.myDetails.isValid=true;
      form.reset();
    }
    else{
      alert('wrong input');
      form.reset();
    }
  }

}
