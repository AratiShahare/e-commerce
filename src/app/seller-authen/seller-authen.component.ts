import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from '../service/seller.service';

@Component({
  selector: 'app-seller-authen',
  templateUrl: './seller-authen.component.html',
  styleUrls: ['./seller-authen.component.css']
})
export class SellerAuthenComponent implements OnInit{
 
   showLogin=false

   login= new FormGroup({
    'email':new FormControl ( ),
    'password':new FormControl( )
   })

   signUp=new FormGroup({
    'name':new FormControl( ),
    'email':new FormControl( ),
    'password':new FormControl( )
   })


   constructor(private seller:SellerService , private router:Router){

   }


   ngOnInit(): void {
   
     this.seller.reloadSeller() 
  }

  userSignup(Body:any){
    this.seller.signUp(this.login.value)
  
  }


  loginSeller(){
    this.seller.login(this.signUp.value)
  }

  openLogin(){
    this.showLogin=false
  }

  
  openSignup(){
    this.showLogin=true
  }


}
