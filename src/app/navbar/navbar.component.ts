import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route:Router){}

   menuType:string="default"
   sellerName!:string

  ngOnInit(): void {
    this.route.events.subscribe((res:any)=>{
      // console.log(res.url)
      if(res.url){
        if(res.url.includes('seller') && localStorage.getItem('seller')){
          this.menuType="sellerMenu"

         let seller:any= localStorage.getItem('seller');
         let sellerdata=JSON.parse(seller)[0].name;
         this.sellerName=sellerdata
       
         console.log("local",sellerdata)
        }
      }
    })

  }

  logout(){
    localStorage.removeItem('seller')
    this.route.navigate([''])
    this.menuType='default'
  }
}
