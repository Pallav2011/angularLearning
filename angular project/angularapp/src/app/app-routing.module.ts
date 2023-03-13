import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DemoComponent } from './demo/demo.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { FashionComponent } from './fashion/fashion.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './products/camera/camera.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { ProductComponent } from './products/product.component';
import { WatchComponent } from './products/watch/watch.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'}, // http:localhost:4200 
  { path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent }, // http://localhost:4200/aboutus
  { path: 'contactus', component: ContactusComponent },
  { path: 'product', component:ProductComponent,
    children:[
      {path:'laptop',component:LaptopComponent},
      {path:'mobile',component:MobileComponent},
      {path:'camera',component:CameraComponent},
      {path:'watch',component:WatchComponent},
    ]
},
  {path:'post',component:DemopostComponent},
  {path:'postDetails/:id', component:DemopostdetailsComponent},
  {path:'users',component:UsersComponent},
  {path:'userDetails/:id',component:UserdetailsComponent},
  {path:'login',component:TemplateformComponent},
  {path:'members',component:MembersComponent},
  {path:'order',component:OrderlistComponent},
  {path:'fashion',component:FashionComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
