import { Component } from '@angular/core';
import { SellerService } from '../service/seller.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  constructor(private addProduService:ProductService){}

  addprod= new FormGroup({

  EnterProductName:new FormControl( ),
  EnterProductPrice:new FormControl( ),
  EnterProductColor:new FormControl( ),
  EnterProductCategory:new FormControl( ),
  EnterProductDescription:new FormControl( ),
  EnterProductImage:new FormControl( ),
   })

   addbuutton(){
     this.addProduService.addProduct(this.addprod.value).subscribe(res=>(console.log(res)))
  }

  
}
