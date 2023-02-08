import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
age=25;
adress="Pandharpur";
pinCode=413304;
  constructor() { }

  ngOnInit() {
  }

}
