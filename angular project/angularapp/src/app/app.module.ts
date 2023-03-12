import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { CountrystatedropdownComponent } from './countrystatedropdown/countrystatedropdown.component';
import { NgifComponent } from './ngif/ngif.component';
// import { CustomDirective } from './custom.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { ReactiveformassignComponent } from './reactiveformassign/reactiveformassign.component';
import { Reactiveformassign2Component } from './reactiveformassign2/reactiveformassign2.component';
import { HttpClientModule } from '@angular/common/http';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { ServiceusingdiComponent } from './serviceusingdi/serviceusingdi.component';
import { CustumPipe } from './custum.pipe';
import { ProductfilterComponent } from './productfilter/productfilter.component';
import { SearchPipe } from './search.pipe';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';
import { MembersComponent } from './members/members.component';
import { ProductModule } from './products/product.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    DemoComponent,
    CardComponent,
    NgforComponent,
    CountrystatedropdownComponent,
    NgifComponent,
    // CustomDirective,
    NgswitchComponent,
    TemplateformComponent,
    ReactiveformComponent,
    RegistrationformComponent,
    ReactiveformassignComponent,
    Reactiveformassign2Component,
    PipeexampleComponent,
    ServiceusingdiComponent,
    CustumPipe,
    ProductfilterComponent,
    SearchPipe,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    PagenotfoundComponent,
    DemopostComponent,
    DemopostdetailsComponent,
    UserdetailsComponent,
    UsersComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
