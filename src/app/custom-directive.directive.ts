import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private el: ElementRef, private render: Renderer) { 
    render.setElementStyle(el.nativeElement, 'color','gray')
  }

  @HostBinding('style.border') border:string;

  @HostListener('mouseover') onmouseover(){
    //let part = this.el.nativeElement.querySelector('.class');

    let part = this.el.nativeElement;
    this.render.setElementStyle(part,'color','green');

    let partId = document.getElementById("emp")
    this.render.setElementStyle(partId,'color','pink')

    this.border ="5px solid green"

       
  }

  @HostListener('mouseout') onmouseout(){
    this.render.setElementStyle(this.el.nativeElement, 'color','gray');

    this.render.setElementStyle(document.getElementById('emp'), 'color','black');
  }

}
