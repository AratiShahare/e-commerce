import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { SellerAuthenComponent } from './seller-authen/seller-authen.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ViewproductComponent } from './viewproduct/viewproduct.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddproductComponent,
    NavbarComponent,
    SearchproductComponent,
    SellerAuthenComponent,
    SellerHomeComponent,
    ViewproductComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
