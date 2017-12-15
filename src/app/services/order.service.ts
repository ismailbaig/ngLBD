import {Injectable} from "@angular/core";
import { orderDetailModel} from "../models/orderDetailModel.model"

@Injectable()
export class orderService{
    private ordDets : orderDetailModel[] = [];
    private count : number = 0;
    constructor(){

    }

    getOrderDetails(){
        return 'ismail';
    }
}