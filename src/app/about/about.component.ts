import { Component, OnInit } from '@angular/core';
import { orderService } from '../services/order.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
  AboutName:string ="Towseef";
  msg:string ="Error";
 
 constructor(private ordersvc:orderService) { 
  // this.AboutName = ordersvc.getAboutDetails();
  this.ordersvc.get('http://localhost:3000/api/home/')
            .subscribe(users => {console.log(users) },
            error => this.msg = <any>error);
 }

  ngOnInit() {
  }

}
