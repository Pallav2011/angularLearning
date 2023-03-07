import { Component, OnInit } from '@angular/core';
import { DemoService } from '../service/demo.service';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-serviceusingdi',
  templateUrl: './serviceusingdi.component.html',
  styleUrls: ['./serviceusingdi.component.css']
})
export class ServiceusingdiComponent implements OnInit {

  products={};
  users;
  searchName:string='';
  constructor(private objMyService:MyserviceService, private objdemoService:DemoService) { 
    console.log(this.products);
    console.log(objMyService.print());
    
  }

  ngOnInit() : void {
    this.products= this.objMyService.products;
    this.objdemoService.getUsers().subscribe(res=>{
      this.users=res;
    },err=>{
      console.log(err); 
    })
}
}