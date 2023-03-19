import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildrensComponent } from './childrens/childrens.component';
import { FashionComponent } from './fashion.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';


const fashionRoutes :Routes=[
  {path:'',
children:[
  {path:'',component:FashionComponent},
  {path:'men',component:MensComponent},
  {path:'women',component:WomensComponent},
  {path:'children',component:ChildrensComponent},
]
}
]

@NgModule({
  imports: [RouterModule.forChild(fashionRoutes)],
  exports: [RouterModule]
})
export class FashionRoutingModule { }
