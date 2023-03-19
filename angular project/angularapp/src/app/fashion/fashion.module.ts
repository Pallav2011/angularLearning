import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { ChildrensComponent } from './childrens/childrens.component';
import { FashionComponent } from './fashion.component';
import { FashionRoutingModule } from './fashion-routing.module';


@NgModule({
  declarations: [FashionComponent, MensComponent, WomensComponent, ChildrensComponent ],
  imports: [
    CommonModule,
    FashionRoutingModule
  ]
})
export class FashionModule {
  constructor(){
    console.log('fashion module is called');
    
  }
 }
