import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countrystatedropdown',
  templateUrl: './countrystatedropdown.component.html',
  styleUrls: ['./countrystatedropdown.component.css']
})
export class CountrystatedropdownComponent implements OnInit {

  arrayOfCountry=[
    {id:'1',name:'India'},
    {id:'2',name:'Jermany'}
  ]

  arrayOfStates=[
    {id:'s1',parentId:'2',name:'Bawariya'},
    {id:'s2',parentId:'2',name:'Berline'},
    {id:'s3',parentId:'1',name:'Maharashtra'},
    {id:'s4',parentId:'1',name:'Karnataka'}
  ]

  states=[];
  constructor() { }

  ngOnInit() {
  }
  onCountrySelect(val:any){
    this.states=this.arrayOfStates.filter(c=>c.parentId==val.target.value);
  }
}
