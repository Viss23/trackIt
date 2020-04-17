import { Directive,Renderer2,HostListener, } from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective {
  constructor(private renderer:Renderer2) {}

  @HostListener("mouseleave") onMouseLeave() {
   this.renderer.setStyle(document.body.querySelector('.site-header') ,"background-color",this.getRandomColor())
  }

  private getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
}
