import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRadioCustomDirective]',
})
export class RadioCustomDirectiveDirective {
  @Input() bgColorName!: string;

  constructor(private elementRefObj: ElementRef) {}

  ngAfterViewInit(): void {
  }

  @HostListener("click") onClick(){
    console.log(this.elementRefObj.nativeElement.getAttribute("bgColorName"))
  }
}
