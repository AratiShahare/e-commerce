import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient ,private router:Router) { }


  signUp(body:any){
    return this.http.post(`http://localhost:3000/seller`,body).subscribe((res)=>
    {console.log(res)
      
    if(res){
      this.router.navigate(['sellerhome'])
    }
    })
  }

  login(body:any){
     return this.http.get(`http://localhost:3000/seller?email=${body.email}&password=${body.password}`).subscribe((res:any)=>
     console.log(res))
  }
}
