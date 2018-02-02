import {Injectable} from "@angular/core";
import { orderDetailModel} from "../models/orderDetailModel.model";
import {UsersModel} from '../models/usersModel.model';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
//import { get } from "https";

@Injectable()
export class orderService{
    public static BASE_USER_ENDPOINT = 'http://localhost:3000/api/home/';
    private ordDets : orderDetailModel[] = [];
    private count : number = 0;

    url: string = "http://jsonplaceholder.typicode.com/users";

    constructor(private http: Http){}

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
       //return this.http.get('http://localhost:3000/api/home/');

       return this.http.get('http://localhost:3000/api/home/')
                .map((resp) => {
                    return resp.json()
                });
       
    }

    getUsersFromWebAPI() {
        return this.http.get(this.url)
            .map((resp) => {
                return resp.json();
            });

    }
}