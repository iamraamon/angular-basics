import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {ProductDomain} from './productdomain';
import {ProductFromGuideSoft} from './productsfromguidesoft';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {

  // Realtion ship concept 
  // interface    implements  public interface OnInit{ }  methods we full write only defination but not implementation
  // class       extends
  products :any;

  productDomainList : ProductDomain[];

  productFromGuideSoftList: ProductFromGuideSoft[] | undefined;

  //productFromGuideSoftList!: ProductFromGuideSoft[];
  //productFromGuideSoftList: ProductFromGuideSoft[] = [];
  constructor(private productService : ProductService) { 

               this.products = [{    
                  id:1,
                  name:"iphone",
                  model:"Apple",
                  year:"2022",
                  country:"US"
                },
                {    
                  id:2,
                  name:"one plus9T",
                  model:"One Plus",
                  year:"2022"
                }
                ] ;


                 this.productDomainList = [
                  {    
                    id:1,
                    name:"Idly",
                    model:"Udipi Hotel",
                    year:"2022",
                   // country:"US"
                  },
                  {    
                    id:2,
                    name:"Dosa",
                    model:"Udipi Hotel",
                    year:"2022"
                  }
                 ]


               productService.getAllProductsFromGuideSoftWithObservable().subscribe(result =>{
                this.productFromGuideSoftList =result;
                console.log("result from with using observable")
                console.log(result);
               });

               productService.getAllProductsFromGuideSoft().subscribe(result =>{
              console.log("result from without using observable")
                console.log(result);
               });

  }



}
