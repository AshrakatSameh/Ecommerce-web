import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsAdminService {

  constructor(private http:HttpClient) { }
  getCartOrders(param?:any){
    let params = new HttpParams
    params = params.append('startDate', param?.start).append('endDate', param?.end)
    return this.http.get('https://fakestoreapi.com/carts',{params})
  }

  deleteCart(id:number){
    return this.http.delete('https://fakestoreapi.com/carts/'+id)
  }
}
