import { Component } from '@angular/core';
import { interfaceProduct } from './models/interfaceProduct.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular-componentes-servicios';
  //public imgParent = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibKLWSIZKaALBo6cfxL6lYYzpMSREhW_Y5_Uqt_xED2zhBzTOcAXITIB4kU_HZVOAsqyHsn2R-p-XkQv3i72ds0_mSj4e2_6HTF0WPAUa8PqiqwQWyhWapqGI_bY0I3SELscpTe25Idi5vcc9lcap-AsygI_nwzIhn8vIjx1tcpmk-KWRo8T22dfgT/s1169/FB_IMG_1659354851429.jpg';
  public imgParent = '';
  public showImg : boolean = true;

  public funCambiarToggleImg(){
    this.showImg = !this.showImg;
  }

  public onLoaded(t: string){
    console.log("log Padre");
    console.log(t)
  }
}
