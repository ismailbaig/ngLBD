import { Component, OnInit } from '@angular/core';
import { orderService } from '../services/order.service';

@Component({
  selector: 'app-header',
   templateUrl: './header.component.html',
//   template: `
//   <nav class="navbar navbar-inverse">
//   <div class="navbar-header">
//     <a href="#" class="navbar-brand">{{cmpHeading}}</a>
//   </div>
//   <ul class="nav navbar-nav">
//     <li><a routerLink="/">Home</a> </li>
//     <li><a routerLink="/about">About</a></li>
    
//   </ul>
  
// </nav>
//   `
})
export class HeaderComponent implements OnInit {

  cmpHeading: string = "Lunch Box Delivery";
  name: string = 'None';

  title = 'app';
  placeToPickLunchBox : string = "No Place selected to pickup lunchbox";
  allPickUpLocations : any[];

  constructor(private ordSvc: orderService){
    this.allPickUpLocations = ordSvc.getOrderDetails();
  }

  ngOnInit() {
  }

}
