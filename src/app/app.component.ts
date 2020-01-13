import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

export interface Appstate{
  message: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Simple comment for Towseef to pull 
  message$ : Observable<string>;
  cmpHeading: string = "Lunch Box Delivery";

  constructor(private store: Store<Appstate>){
    this.message$ = this.store.select('message');
  }

  frenchMessage(){
    this.store.dispatch({type: 'FRENCH'}); //type and payload
  } 

  spanishMessage(){
    this.store.dispatch({type: 'SPANISH'});
  }
}
