import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-hoooks',
  templateUrl: './hoooks.component.html',
  styleUrls: ['./hoooks.component.css']
})
export class HoooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() parentData:string;
  @ContentChild ("child", {static : false}) contentChild: ElementRef;
  @ViewChild ("childhook", {static : false}) viewchild: ElementRef;
  counter;
  num:number=1;
  constructor() { 
    console.log(`HoooksComponent constructor called`);
  }
  ngOnDestroy(): void {
    console.log(`HoooksComponent ngOnDestroy called`);
    clearInterval(this.counter);
  }
  ngAfterViewChecked(): void {
    console.log(`HoooksComponent ngAfterViewChecked called`);
    this.viewchild.nativeElement.setAttribute('style', `color: ${this.parentData}`);
  }
  ngAfterViewInit(): void {
    console.log(`HoooksComponent ngAfterViewInit called`);
    this.viewchild.nativeElement.setAttribute('style', `color: ${this.parentData}`);
  }
  ngAfterContentChecked(): void {
    console.log(`HoooksComponent ngAfterContentChecked called`);
    this.contentChild.nativeElement.setAttribute('style', `color: ${this.parentData}`);
    
  }
  ngAfterContentInit(): void {
    console.log(`HoooksComponent ngAfterContentInit called`,this.contentChild);
    this.contentChild.nativeElement.setAttribute('style', `color: ${this.parentData}`);
  }
  ngDoCheck(): void {
    console.log(`HoooksComponent ngDoCheck called`);
  }
  ngOnInit(): void {
    console.log(`HoooksComponent ngOnInit called`);
    this.counter= setInterval(()=>{
      this.num=this.num+1;
      console.log(this.num); 
    },1000)
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
