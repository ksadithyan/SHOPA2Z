import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
  AppComponent,
  HomeComponent,
    ViewcartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
