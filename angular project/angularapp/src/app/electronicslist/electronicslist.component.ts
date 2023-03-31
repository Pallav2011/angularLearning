import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-electronicslist',
  templateUrl: './electronicslist.component.html',
  styleUrls: ['./electronicslist.component.css']
})
export class ElectronicslistComponent implements OnInit {
  cartCount:number=0;
  laptopData={
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlABIEPOyTnCC1sSFzIg_6E4o_3fpJ9e-Erw&usqp=CAU',
    title:'Laptop',
    disc:'This is Laptop and easy to handle.'
  }
  constructor() { }

  ngOnInit() {
  }


  addToCart(){
    this.cartCount= this.cartCount + 1;
  }


}
