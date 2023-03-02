import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  showAge;

  products =[
  { name: 'Laptop', id:'101'},
  {name: 'mobile', id: '102'},
  {name:'TV', id: '103'}
  ]
  constructor() { }

  ageCalculator(age:any):number{
    if(age){
      const convertAge=new Date(age);
      const timeDiff=Math.abs(Date.now()-convertAge.getTime());
     return this.showAge=Math.floor(timeDiff/(1000*3600*24)/365);
    }
  }

  print(){
    alert("hellow service is running");
  }
}
