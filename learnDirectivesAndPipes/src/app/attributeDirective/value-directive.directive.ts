import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appValueDirective]'
})
export class ValueDirectiveDirective {

  @Input() buttonColor:string = "";

  constructor(private elementRefObj: ElementRef) { }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.elementRefObj.nativeElement.style.backgroundColor = this.buttonColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRefObj.nativeElement.style.backgroundColor = "pink"
  }
}
