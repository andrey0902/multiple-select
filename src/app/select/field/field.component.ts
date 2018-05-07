import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input() title;
  @Input() disabled;
  @Input() isVisible: boolean;
  constructor() {}

  ngOnInit() {
  }

}
