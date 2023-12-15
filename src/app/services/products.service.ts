import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'http://localhost:8080/api';

  public httpOptions = {
    headers : new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    }) 
   }

  public constructor(
    private http: HttpClient
  ) {}
  
  public getProducts() : Observable< Product[] > {
    return this.http.get< Product[] >(this.apiUrl+'/products');
  }

  public getProductById(id:number){
    return this.http.get<Product>(this.apiUrl+'/product/'+id)
  }

}
