import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DishService {
  _url = "/api/Dish"
  constructor(private http: HttpClient) {
    console.log("Servicio Dish")
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
}
