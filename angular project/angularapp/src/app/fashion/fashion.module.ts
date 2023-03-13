import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { ChildrensComponent } from './childrens/childrens.component';
import { RouterModule } from '@angular/router';
import { FashionComponent } from './fashion.component';




@NgModule({
  declarations: [FashionComponent, MensComponent, WomensComponent, ChildrensComponent ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FashionModule { }
