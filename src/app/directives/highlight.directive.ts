import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[directHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = '#f6e58d';
    console.log("event directiva-> mouseenter");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '#dff9fb';
    console.log("event directiva-> mouseleave");
  }

  constructor(
    private element: ElementRef
  ) {
    this.element.nativeElement.style.backgroundColor = '#c7ecee';
   }

}
