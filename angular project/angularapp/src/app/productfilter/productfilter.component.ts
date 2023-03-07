import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productfilter',
  templateUrl: './productfilter.component.html',
  styleUrls: ['./productfilter.component.css']
})
export class ProductfilterComponent implements OnInit {

  searchName:string='';
  products:any[]=[
    {
      sNo:'1',
      name:'Mobile',
      price:47000,
      availability:'Available'
    },
    {
      sNo:'2',
      name:'Laptop',
      price:15000,
      availability:'Available'
    },
    {
      sNo:'3',
      name:'Watch',
      price:2500,
      availability:'Not Available'
    },
    {
      sNo:'4',
      name:'Shoes',
      price:4800,
      availability:'Available'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
