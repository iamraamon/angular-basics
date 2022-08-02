import { Injectable } from '@angular/core';

import {HttpClient}  from '@angular/common/http'
import { Observable } from 'rxjs';

import {ProductFromGuideSoft} from '../components/product-list/productsfromguidesoft';

const base_url = "http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

 // private httpClient : any;
  constructor(private httpClient : HttpClient) { }

   getAllProductsFromGuideSoftWithObservable () : Observable<ProductFromGuideSoft[]> {


    return  this.httpClient.get<ProductFromGuideSoft[]>(base_url+'/productsGuideSoftFromCatalogue')

   }

   getAllProductsFromGuideSoft ()  {


    return  this.httpClient.get(base_url+'/productsGuideSoftFromCatalogue')

   }

}
