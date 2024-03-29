import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ElectronicslistComponent } from './electronicslist/electronicslist.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { MycartComponent } from './mycart/mycart.component';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './products/camera/camera.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { ProductComponent } from './products/product.component';
import { WatchComponent } from './products/watch/watch.component';
import { UnsavedchangesGuard } from './service/unsavedchanges.guard';
import { TemplateformComponent } from './templateform/templateform.component';
import { TodoComponent } from './todo/todo.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';
import { MachintestComponent } from './machintest/machintest.component';
import { HoooksComponent } from './hoooks/hoooks.component';
import { RapidapipracticeComponent } from './rapidapipractice/rapidapipractice.component';
import { FirebasepracticeComponent } from './firebasepractice/firebasepractice.component';

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
  { path:'post',component:DemopostComponent},
  { path:'postDetails/:id', component:DemopostdetailsComponent},
  { path:'users',component:UsersComponent},
  { path:'userDetails/:id',component:UserdetailsComponent},
  { path:'login',component:TemplateformComponent},
  { path:'members',component:MembersComponent},
  { path:'order',component:OrderlistComponent},
  { path:'fashion',loadChildren:'./fashion/fashion.module#FashionModule'},
  { path: 'customer', loadChildren:'./customer/customer.module#CustomerModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  { path:'todo',component:TodoComponent},
  { path:'wiki',component:WikipediaComponent},
  { path: 'electronics', component:ElectronicsComponent},
  { path:'electroniclist',component:ElectronicslistComponent,
  children:[
    { path:'',component:MycartComponent}
  ]
  },
  { path:'adduser',component:AdduserComponent,canDeactivate:[UnsavedchangesGuard]},
  { path:'hooks', component:HoooksComponent},
  { path:'machinetest', component:MachintestComponent},
  { path:'rapidapipract', component:RapidapipracticeComponent},
  { path:'firebasepract', component:FirebasepracticeComponent},
  { path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//{ preloadingStrategy : PreloadAllModules }
  exports: [RouterModule],
})
export class AppRoutingModule { }
