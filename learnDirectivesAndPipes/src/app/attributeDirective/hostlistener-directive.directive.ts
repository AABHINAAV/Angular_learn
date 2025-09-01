import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostlistenerDirective]',
})
export class HostlistenerDirectiveDirective {
  constructor(private elementRefobj: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRefobj.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseleave') eventListenerFunctionName() {
    this.elementRefobj.nativeElement.style.backgroundColor = 'white';
  }
}
