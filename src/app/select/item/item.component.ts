import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {IMultiSelectOption, IMultiSelectSettings} from '../shared/type';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() option: IMultiSelectOption;
  @Input() settings: IMultiSelectSettings;
  @Output() public checked = new EventEmitter();
  constructor() { }

  ngOnInit() {
    // console.log('item option0', this.option);
  }

  public onChecked(option): void {
    this.toggleChecked();
    this.checked.emit(option);
  }

  private toggleChecked() {
    this.option.isChecked = !this.option.isChecked;
  }
}
