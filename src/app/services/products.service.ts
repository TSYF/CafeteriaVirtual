import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  utilSvc = inject(UtilsService);

  apiUrl = 'http://localhost:8080/api';

  httpOptions = {
    headers : new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    }) 
   }

  constructor(private http: HttpClient) {

  }
  
  getProducts() : Observable< Product[] > {
    return this.http.get< Product[] >(this.apiUrl+'/products');
  }

  getProductById(id:number){
    return this.http.get<Product>(this.apiUrl+'/product/'+id)
  }

}
