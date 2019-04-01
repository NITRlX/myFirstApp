import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private rendered: Renderer2) { }

ngOnInit() {
  // this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
}

@HostListener('mouseenter') mouseEnterEvent(enventData: Event) {
  this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  this.rendered.setStyle(this.elRef.nativeElement, 'color', 'red');
  this.rendered.setStyle(this.elRef.nativeElement, 'font-size', '40px');
}

@HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
  this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  this.rendered.setStyle(this.elRef.nativeElement, 'color', 'black');
  this.rendered.setStyle(this.elRef.nativeElement, 'font-size', '17px');
}

}
