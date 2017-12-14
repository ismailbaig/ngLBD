import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',
  template: `
  <nav class="navbar navbar-inverse">
  <div class="navbar-header">
    <a href="#" class="navbar-brand">{{cmpHeading}}</a>
  </div>
  <ul class="nav navbar-nav">
    <li><a routerLink="/">Home</a> </li>
    <li><a routerLink="/about">About</a></li>
    
  </ul>
  
</nav>
  `
})
export class HeaderComponent implements OnInit {

  cmpHeading: string = "Lunch Box Delivery";

  title = 'app';
  placeToPickLunchBox : string = "No Place selected to pickup lunchbox";
  allPickUpLocations : any[];

  constructor(){
    this.allPickUpLocations = [
      { area: 'BTM', state: 'Bangalore', pincode: '123' },
      { area: 'BTM stage 2', state: 'Bangalore', pincode: '124' }
    ];
  }

  ngOnInit() {
  }

}
