import {Injectable} from "@angular/core";
import { orderDetailModel} from "../models/orderDetailModel.model"
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
//import { get } from "https";

@Injectable()
export class orderService{
    public static BASE_USER_ENDPOINT = 'http://localhost:3000/api/home/';
    private ordDets : orderDetailModel[] = [];
    private count : number = 0;

    constructor(private _http: Http) { }

    getOrderDetails(){
        this.ordDets = [
            new orderDetailModel ('BTM', 'Bangalore'),
            new orderDetailModel ('Bellandur', 'Devarabeesanahalli'),
            new orderDetailModel ('Maruti Nager', 'Marthalli')
    ]
        return this.ordDets;
    }  
    
    getAboutDetails() : Observable<any>{
       // return "I am data from order service";
       return this.get('http://localhost:3000/api/home/');
       
    }

    get(url: string): Observable<any> {
        return this._http.get(url)
          .map((response: Response) => <any>response.json())
         .do(data => console.log("All: " + JSON.stringify(data)))
          .catch(this.handleError);
      }

      private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
      }
}