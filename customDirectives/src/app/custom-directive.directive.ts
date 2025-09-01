import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private elementRefObj: ElementRef) { 
    this.elementRefObj.nativeElement.style.backgroundColor = 'black';
    this.elementRefObj.nativeElement.style.color = 'white';
    this.elementRefObj.nativeElement.style.fontFamily = 'cursive';
    this.elementRefObj.nativeElement.style.width = '100px';
    this.elementRefObj.nativeElement.style.height = '30px';
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.elementRefObj.nativeElement.style.backgroundColor = 'orange';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elementRefObj.nativeElement.style.backgroundColor = 'black';
  }
}
