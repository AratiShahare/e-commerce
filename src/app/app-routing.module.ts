import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { SellerAuthenComponent } from './seller-authen/seller-authen.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'addproduct', component:AddproductComponent
  },
  {
    path:'sellerhome', component:SellerHomeComponent, //canActivate:[AuthGuard]

  },
  {
    path:'sellerauthen', component:SellerAuthenComponent
  },
  {
    path:'searchproduct', component:SearchproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
