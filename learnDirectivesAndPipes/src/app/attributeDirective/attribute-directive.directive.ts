import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttributeDirective]',
})
export class AttributeDirectiveDirective {
  constructor(private elementRefObj: ElementRef) {
    this.elementRefObj.nativeElement.style.backgroundColor = "red";
  }
}
