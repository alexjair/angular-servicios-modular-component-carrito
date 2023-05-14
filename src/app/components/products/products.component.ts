import { Component, OnInit } from '@angular/core';
import { interfaceProduct } from '../../models/interfaceProduct.model';

//import Servicios
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  constructor(
    private vServiceStore: StoreService,
    private vProductsService: ProductsService,
  ) {
    //data api carrito
    this.arrayCarrito = this.vServiceStore.servFunArrayElementoaCarrito();
    //his.arrayProductosLista = this.vServiceStore.servFunArrayCarrito();
  }

  //fechas
  vToday = new Date();
  vDate = new Date(2021,1,21);

  total_monto = 0;

  arrayCarrito: interfaceProduct[] = [];

  arrayProductosLista: interfaceProduct[] = [];

  /*
  arrayProductosLista: interfaceProduct[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      id: '5',
      name: 'Mis Lentes',
      price: 23,
      image: './assets/images/glasses.jpg'
    },
    {
      id: '6',
      name: 'Mis Casa',
      price: 23,
      image: './assets/images/house.jpg'
    },
  ];
  */


  //iniciador
  ngOnInit(): void {
    this.vProductsService.servProductsGetAll().subscribe(dtProductos => {
        console.log(dtProductos);
        this.arrayProductosLista = dtProductos;
      });
  }

  productAgregarRevice(rowProducto: interfaceProduct){
    console.log("products:productAgregarRevice() --> Recibe",rowProducto);
    //servicio store: acumula los carritos agregados
    this.vServiceStore.servFunAgregarProductRecibe(rowProducto);
    //obetenemos el total
    this.total_monto = this.vServiceStore.servFunGetTotal();
  }

}
