import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interfaceProduct } from '../../models/interfaceProduct.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  //recive y utiliza en local
  @Input() arrayProducto: interfaceProduct = {
    id: '',
    title: '',
    price: 0,
    image: '',
    description: '',
    category: ''
  };

  @Output() outProductAgregar = new EventEmitter<interfaceProduct>();

  public funAgregarCarrito(){
    console.log("product:funAgregarCarrito()-->Envia",this.arrayProducto);
    console.log("@Output:outProductAgregar-->Envia");
    this.outProductAgregar.emit(this.arrayProducto)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
