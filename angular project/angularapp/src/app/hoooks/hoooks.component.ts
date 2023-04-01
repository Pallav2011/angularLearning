import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-hoooks',
  templateUrl: './hoooks.component.html',
  styleUrls: ['./hoooks.component.css']
})
export class HoooksComponent implements OnChanges, OnInit {

  @Input() parentData:number;
  constructor() { 
    console.log(`HoooksComponent constructor called`);
    
  }
  ngOnInit(): void {
    console.log(`HoooksComponent ngOnInit called`);
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`HoooksComponent ngOnChanges Called`,changes);
    for(const propName in changes){
      const prop=changes[propName];
      console.log(prop);
      const {previousValue,currentValue,firstChange}=prop;
      console.log(`prop name ${propName}`);
      console.log(`prev value :${previousValue}`);
      console.log(`currrent value :${currentValue}`);
      console.log(`first change :${firstChange}`);
console.log('----------------------------');

      
      
    }
    
  }



}
