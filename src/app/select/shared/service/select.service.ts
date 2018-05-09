import { Injectable } from '@angular/core';
import { IMultiSelectOption } from '../type';

@Injectable()
export class SelectService {
  public checkedAll = false;
  private _model: IMultiSelectOption[] = [];

  constructor() {
  }

  public getModel() {
    return this._model;
  }

  public setModel(value: IMultiSelectOption) {
    if (value) {
      this._model.push(value);
    }
  }

  public removeModel(option: IMultiSelectOption): void {
    const index = this._model.findIndex(item => {
      return item.id === option.id;
    });

    if (index !== -1) {
      this._model.splice(index, 1);
    }
  }

  public removeAllModel() {
    this._model = [];
  }

  public setAllModel(options: IMultiSelectOption[]) {
    this._model = options.map(option => Object.assign(option));
  }

  public notMultipleSet(options, option) {
    if (this._model.length === 1) {
      this.setUnchecked(options, option);
      this.removeAllModel();
      this.setModel(option);
    } else {
      this.setModel(option);
    }
  }

  public setUnchecked(list: IMultiSelectOption[], option: IMultiSelectOption) {
    list.forEach(item => {
      if (item.id !== option.id) {
        item.isChecked = false;
      }
    });
  }

  public maybeStopPropagation(e?: { stopPropagation?: Function }) {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
  }

  public maybePreventDefault(e?: { preventDefault?: Function }) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
  }

  public updateTitle(countTitleShow): string {
    let str = '';
    const length = this._model.length - 1;
    for (let i = 0; i <= length; i++) {
      if (i === countTitleShow) {
        break;
      }
      if (i <= length - 1) {
        str += this._model[i].name + ', ';
      } else {
        str += this._model[i].name;
      }
    }
    return str;
  }

  public updatePath(list: IMultiSelectOption[]) {
    this._model.forEach(item => {
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === item.id) {
          list[i].isChecked = item.isChecked;
          break;
        }
      }
    });
  }
}
