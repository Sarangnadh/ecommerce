import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DeleteProductComponent } from './delete-product/delete-product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
search = new BehaviorSubject("")
  constructor(private httpClient:HttpClient) { }


//api to get all product
viewAllProduct(){
  const baseURL = "http://localhost:3000/products"
  return this.httpClient.get(baseURL)
}

//apito get a single product
viewProduct(ProductId:any){
  const baseURL = "http://localhost:3000/products"+ProductId
  return this.httpClient.get(baseURL)

}


//api call to delete a single product
deleteProduct(ProductId:any){
  const baseURL = "http://localhost:3000/products"+ProductId
  return this.httpClient.get(baseURL)
}

}
