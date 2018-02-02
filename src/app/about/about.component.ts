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
  objPosts: Object;
  dataFromOurWebAPI : string = '';
 
 constructor(private ordersvc:orderService) { 
  // this.AboutName = ordersvc.getAboutDetails();

  // this.ordersvc.getAboutDetails('http://localhost:3000/api/home/')
  //           .subscribe(users => {console.log(users) },
  //           error => this.msg = <any>error);
 }

  ngOnInit() {
    var x = this.ordersvc.getUsersFromWebAPI()
              .subscribe(
                (responseData) => this.objPosts = responseData,
                (error) => console.log(error));
    
    //            console.log(x);

        this.ordersvc.getAboutDetails()
                .subscribe(
                  (resp) => this.dataFromOurWebAPI = resp,
                  (error) => console.log(error)
                );
  }

}
