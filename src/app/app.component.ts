import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  placeToPickLunchBox : string = "No Place selected to pickup lunchbox";
  allPickUpLocations : any[];

  constructor(){
    this.allPickUpLocations = [
      { area: 'BTM', state: 'Bangalore', pincode: '123' },
      { area: 'BTM stage 2', state: 'Bangalore', pincode: '124' }
    ];
  }
}
