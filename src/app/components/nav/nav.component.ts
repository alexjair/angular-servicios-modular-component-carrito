import { Component, OnInit } from '@angular/core';

//service
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private vServiceStore: StoreService
  ) { }

  activeMenu = false;
  vTotalCarrito = 0;

  ngOnInit(): void {
    //usamos la proiedad rxjs - REACTIVO DE store.service
    this.vServiceStore.objCarritoCargado$.subscribe( dt => {
      this.vTotalCarrito = dt.length;
    })
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }
}
