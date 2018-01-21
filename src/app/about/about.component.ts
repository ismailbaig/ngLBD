import { Component, OnInit } from '@angular/core';
import { orderService } from '../services/order.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
  AboutName:string ="Towseef";
  
 
 constructor(private ordersvc:orderService) { 
   this.AboutName = ordersvc.getAboutDetails();
 }

  ngOnInit() {
  }

}
