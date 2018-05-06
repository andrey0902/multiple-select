import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { SelectService } from '../shared/service/select.service';
import { IMultiSelectOption } from '../shared/type';
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
  @Input() options: IMultiSelectOption[];
  // tslint:disable-next-line
  @Input('checkAllText') checkAllText: string;
  @Input() filteredOptions: any;
  @Output() isChecked = new EventEmitter();
  public checkedAll = false;
  constructor( private service: SelectService,
               private dr: ChangeDetectorRef) { }

  ngOnInit() {
  }
  public checkAll() {
    this.toggleChecked();
    console.log(this.items);
    this.items.forEach(item => {
      console.log('item', item);
      item.option.isChecked = this.checkedAll;
      if (this.checkedAll) {
        this.service.setAllModel(this.options);
      } else {
        this.service.removeAllModel();
      }
    });
    this.isChecked.emit({checked: true});
  }
/*  focusItem(dir: number, e?: Event) {
    if (!this.isVisible) {
      return;
    }

    this.service.maybePreventDefault(e);

    const idx = this.filteredOptions.indexOf(this.focusedItem);

    if (idx === -1) {
      this.focusedItem = this.filteredOptions[0];
      return;
    }

    const nextIdx = idx + dir;
    const newIdx =
      nextIdx < 0
        ? this.filteredOptions.length - 1
        : nextIdx % this.filteredOptions.length;

    this.focusedItem = this.filteredOptions[newIdx];
  }*/
  public onChecked(event: IMultiSelectOption) {
    if (event.isChecked) {
      this.service.setModel(event);
    } else {
      this.service.removeModel(event);
    }
    this.isChecked.emit({checked: true});
  }

  private toggleChecked(): void {
    this.checkedAll = !this.checkedAll;
  }
}
