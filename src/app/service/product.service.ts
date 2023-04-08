import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpc:HttpClient) { }

  addProduct(body:any){
    return this.httpc.post(`http://localhost:3000/product`,body)
  }
}
