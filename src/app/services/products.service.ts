import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interfaceProduct } from '../models/interfaceProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private vHttpClient: HttpClient
  ) { }

  //funciones
  servProductsGetAll(){
    //Pedir los productos desde API
    //Lista Arrays
    return this.vHttpClient.get<interfaceProduct[]>('https://fakestoreapi.com/products');
    //Solo uno
    //return this.vHttpClient.get<interfaceProduct>('https://fakestoreapi.com/products');
  }
}
