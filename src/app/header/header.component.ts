import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { orderService } from '../services/order.service';

@Component({
  selector: 'app-header',
   templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  
  name: string = 'None';

  title = 'app';
  placeToPickLunchBox : string = "No Place selected to pickup lunchbox";
  allPicDropLocs : any[];

  constructor(private ordSvc: orderService, private router: Router) {
    this.allPicDropLocs = ordSvc.getOrderDetails();

  }

  submitOrder (){
    this.router.navigateByUrl('/orderdetls');
  }

  ngOnInit() {
  }

}
