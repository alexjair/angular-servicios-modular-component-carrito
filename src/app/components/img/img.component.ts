import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  //datos del Padre
  //@Input('img') img : string = "";

  //set input
  img: string = '';
  //img heredada del padre (product : ArrayProductos)
  @Input('img') set changesImg(newImg: string){
      this.img = newImg;
      //code
      console.log('change just img =>', this.img );
    }

  @Output() out_funImgLoad = new EventEmitter<string>();

  //local
  //public imgDefalutImg : string = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpMNkdqxoi2dFJu0-uldf8L0aHMFDedNp7xGY4YRkHielu3K41PF6TN1Py9lCVYMAVtEsV1IxGcaQBRgfps0F137WCY6XcJiG2eXUN4fOhAPMj3n39gGLz_hKkWrQdmXGODR8f8-MVG2KjTB0UXBMwCSAREihFfw70bKMxUZbS1We4tr8GjFiOQy6q/s1600/scrum-foundation-professional-certificate-sfpc.1.png";
  public imgDefalutImg : string = "./assets/images/default.png";
  public counter = 0;
  public counterInterval: number | undefined;

  constructor() {
    //before render
    //no async -- once time
    console.log('constructor', 'imgValue =>', this.img);
  }

  public funImgLoad(){
    console.log("log hijo: Img fue Cargada");
    //enviar father
    //enviamos la img que es string
    this.out_funImgLoad.emit(this.img);
  }

  public funErrorImg(){
    this.img = this.imgDefalutImg;
  }

  ngOnInit(): void {
    // before render
    // async - fetch -- once time
    //console.log('ngOnInit', 'imgValue =>', this.img);
    /*
    this.counterInterval = window.setInterval( () => {
      this.counter +=1;
      console.log('run counter');
    },1000)
    */
  }

  ngOnChanges(dt: SimpleChanges) {
    // before during - render
    // changes inputs -- times
    //console.log('ngOnChanges', 'imgValue =>', this.img);
    //console.log('changes',dt);
  }

  ngAfterViewInit(){
    // after - render
    // handler children
    //console.log('ngAfterViewInit', 'imgValue =>', this.img);
  }

  ngOnDestroy() {
    // delete components
    console.log('ngOnDestroy');
    //window.clearInterval(this.counterInterval);
  }

}
