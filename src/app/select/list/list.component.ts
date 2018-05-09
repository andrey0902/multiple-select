import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { SelectService } from '../shared/service/select.service';
import {IMultiSelectOption, IMultiSelectSettings} from '../shared/type';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChildren(ItemComponent) public items: ItemComponent[];
  @Input() maxHeight: string;
  @Input() isVisible: boolean;
  @Input() showCheckAll: boolean;
  @Input() settings: IMultiSelectSettings;
  @Input() options: IMultiSelectOption[];
  // tslint:disable-next-line
  @Input('checkAllText') checkAllText: string;
  @Input() filteredOptions: any;
  @Output() isChecked = new EventEmitter();
  public checkedAll = false;
  constructor( private service: SelectService,
               private dr: ChangeDetectorRef) {
    this.checkedAll = this.service.checkedAll;
  }

  ngOnInit() {
  }
  public checkAll() {
    this.toggleChecked();
    this.items.forEach(item => {

      item.option.isChecked = this.checkedAll;
      if (this.checkedAll) {
        this.service.setAllModel(this.options);
      } else {
        this.service.removeAllModel();
      }
    });
    this.isChecked.emit({checked: true});
  }

  public onChecked(event: IMultiSelectOption) {
    this.checkedIsMultiple(event);

  }

  public checkedIsMultiple(event) {
    if (this.settings.isMultiple) {
      this.isMultiple(event);
    } else {
      this.notMultiple(event);
    }
  }

  public isMultiple(event: IMultiSelectOption) {
    if (event.isChecked) {
      this.service.setModel(event);
    } else {
      this.service.removeModel(event);
    }
    this.isChecked.emit({checked: true});
    this.isCheckedAll();
  }

  public notMultiple(event) {
    this.service.notMultipleSet(this.options, event);
    this.isChecked.emit({checked: true});
  }

  private toggleChecked(): void {
    this.checkedAll = !this.checkedAll;
    this.service.checkedAll = !this.service.checkedAll;
  }

  private isCheckedAll() {
    // console.log(this.options.length , this.service.getModel().length);
    this.checkedAll = this.options.length === this.service.getModel().length;
    this.service.checkedAll = this.checkedAll;
  }
}
