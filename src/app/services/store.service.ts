import { Injectable } from '@angular/core';
import { interfaceProduct } from '../models/interfaceProduct.model';

//reactividad
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  //rxjs
  //obervacion -REACTIVO
  private objCarritoCargado = new BehaviorSubject<interfaceProduct[]>([]);
  public objCarritoCargado$ = this.objCarritoCargado.asObservable();

  //var
  private arrayCarrito: interfaceProduct[] = [];

  constructor() { }

  //funciones
  servFunArrayElementoaCarrito(){
    return this.arrayCarrito;
  }

  servFunAgregarProductRecibe(vProductoRecibido: interfaceProduct){
    console.log("serv.store: servProductAgregarRevice() --> Recibe",vProductoRecibido);
    this.arrayCarrito.push(vProductoRecibido);
    console.log('servFunAgregarProductRecibe: Elementos => arrayCarrito -->',this.arrayCarrito);

    //observable - REACTIVO
    //enviamos array de carrito cargado a obs.
    this.objCarritoCargado.next(this.arrayCarrito);
  }

  servFunGetTotal(){
    return this.arrayCarrito.reduce((sum, item) => sum + item.price,0);
  }
}
