import { HttpClient } from '@angular/common/http';
import{ Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn=new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient ,private router:Router) { }


  signUp(body:any){
    return this.http.post(`http://localhost:3000/seller`,body).subscribe((res)=>
    {console.log(res)
      
    if(res){
     this.isSellerLoggedIn.next(true)
      this.router.navigate(['sellerhome'])
    }
    })
  }

  login(body:any){
     return this.http.get(`http://localhost:3000/seller?email=${body.email}&password=${body.password}`)
     .subscribe((res:any)=>{
      
   if(res.length){
    localStorage.setItem('seller',JSON.stringify(res))
    this.router.navigate(['sellerhome'])
    alert("user logged in")
   }
   else{
    alert("login failed")
   }
  })

  }

  reloadSeller() {
    if(localStorage.getItem('seller')){
    this.isSellerLoggedIn.next(true)
    this.router.navigate(['sellerhome'])
    }
  }
}
