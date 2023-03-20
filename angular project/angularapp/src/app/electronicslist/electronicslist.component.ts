import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronicslist',
  templateUrl: './electronicslist.component.html',
  styleUrls: ['./electronicslist.component.css']
})
export class ElectronicslistComponent implements OnInit {
  cartCount:number=0;
  constructor() { }

  ngOnInit() {
  }

  addToCart(){
    this.cartCount= this.cartCount + 1;
  }
}
