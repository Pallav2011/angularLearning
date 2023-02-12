import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { CountrystatedropdownComponent } from './countrystatedropdown/countrystatedropdown.component';
@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    DemoComponent,
    CardComponent,
    NgforComponent,
    CountrystatedropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
