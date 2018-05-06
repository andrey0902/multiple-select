import { Component, ElementRef, HostListener, Input, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css']
})
export class TestModalComponent implements OnInit {
  @Input() public viewContainer: ViewContainerRef;
  @Input() public data;
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  public prevent(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('click', ['$event']) public closed(event) {
    console.log(event);
    if (this.el.nativeElement.contains(event.target)) {
      console.log('closed');
      this.viewContainer.clear();
    }
  }

}
