import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Dish } from '../models/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  headers2 = new HttpHeaders()
  .set('Type-content', 'aplication/json')
  .set('Access-Control-Allow-Origin','*');
  _url = "/api/Dish"
  constructor(private http: HttpClient) {
   }
   
   getDishes(){
     let headers = new HttpHeaders()
     .set('Type-content', 'aplication/json')
     .set('Access-Control-Allow-Origin','*');
     let params = new HttpParams()
     .set("page", "1")
     .set("pageSize", "25");
     return this.http.get(this._url, { headers: headers , params: params});
   }

  getDish(id: number){
    let headers = new HttpHeaders()
     .set('Type-content', 'aplication/json')
     .set('Access-Control-Allow-Origin','*');
    return this.http.get<Dish>(`${this._url}/${id}`, { headers: headers});
  }

  saveOrUpdateDish(dish: Dish){
    let headers = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    .set('Access-Control-Allow-Origin','*');
    if(dish.id > 0){
      return this.http.put<Dish>(`${this._url}/${dish.id.toString()}`, dish, { headers: headers } )
    }
    else{
      return this.http.post<Dish>(this._url, dish, { headers: headers } );      
    }
  }

  deleteDish(id: Number){
    return this.http.delete(`${this._url}/${id.toString()}`, { headers: this.headers2 });
  }
}
