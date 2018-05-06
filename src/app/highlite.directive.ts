import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlite]'
})
export class HighliteDirective {
  @Input('appHighlite') public color = 'coral';

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseover')
  public onOver() {
    this.setColor(this.color);
  }

  @HostListener('mouseout')
  public onLeave() {
   this.setColor('#fff');
  }

  private setColor(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
