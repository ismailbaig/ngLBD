import {Injectable} from "@angular/core";
import { orderDetailModel} from "../models/orderDetailModel.model";
import {UsersModel} from '../models/usersModel.model';
import { Observable } from "rxjs/Observable";
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class orderService{
    private ordDets : orderDetailModel[] = [];
    private count : number = 0;

    url: string = "http://jsonplaceholder.typicode.com/users";

    constructor(private http: Http){

    }

    getOrderDetails(){
        this.ordDets = [
            new orderDetailModel ('BTM', 'Bangalore'),
            new orderDetailModel ('Bellandur', 'Devarabeesanahalli'),
            new orderDetailModel ('Maruti Nager', 'Marthalli')
    ]
        return this.ordDets;
    }  
    
    getAboutDetails(){
        return "I am data from order service";
    }

    getUsersFromWebAPI() {
        return this.http.get(this.url)
            .map((resp) => {
                return resp.json();
            });

    }
}