import { Injectable } from '@angular/core';
import { IMultiSelectOption } from '../type';
import {OptionModel} from './option.model';
import {a} from '@angular/core/src/render3';

@Injectable()
export class SelectService {
  public checkedAll = false;
  public settings;
  public type;
  private _model: any[]  = [];

  constructor() {
  }

  public getModel(): any[] | any {
    if (this.settings.isMultiple) {
      return this._model;
    } else {
      return this._model[0];
    }
  }

  public setModel(value: OptionModel) {
    console.log('setModel', value);
    if (value) {
      if (this.type !== 'string') {
        this._model.push(value);
      } else {
        this._model.push(value.name);
      }
    }
  }

  public removeModel(option: OptionModel): void {
    let index;
    if (this.type !== 'string') {
      index = this._model.findIndex(item => {
        return item.id === option.id;
      });
    } else {
      index = this._model.findIndex(item => {
        return item === option.name;
      });
    }

    if (index !== -1) {
      this._model.splice(index, 1);
    }
  }

  public removeAllModel() {
    this._model = [];
  }

  public setAllModel(options: any) {
    console.log('options', options);
    console.log('this.type', this.type);

    if (typeof options === 'string') {
      this._model.push(options);
      console.log('simple STRING');
    } else if (typeof options === 'object' && options[0] !== 'string' && this.type !== 'string') {
      if (options.map) {
        this._model = options.map(option => Object.assign(option));
      } else {
        this._model.push(Object.assign(options));
      }
      console.log('OBJECT HARD');
    } else if (typeof options === 'object' && this.type === 'string' && typeof options[0] !== 'string') {
      console.log('CHECKED ALL');
      options.forEach(item => {
        this._model.push(item.name);
      });
    } else if (typeof options === 'object' && this.type === 'string' && typeof options[0] === 'string') {
      console.log('ARRAY STRINGS');
      options.forEach(item => {
        this._model.push(item);
      });
    }



    // if (typeof options === 'string') {
    //     this._model.push(options);
    // } else if (this.type === 'string' && typeof options === 'object') {
    //   if (this.settings.isMultiple) {
    //     options.forEach(item => this._model.push(item.name));
    //   } else {
    //     this._model.push(options[0].name);
    //   }
    // } else {
    //   this._model = options.map(option => Object.assign(option));
    // }
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

  public setUnchecked(list: OptionModel[], option: OptionModel) {
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
    console.log('this._model', this._model);
    let str = '';
    const length = this._model.length - 1;
    if (this.type !== 'string') {
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
    } else {
      for (let i = 0; i <= length; i++) {
        if (i === countTitleShow) {
          break;
        }
        if (i <= length - 1) {
          str += this._model[i] + ', ';
        } else {
          str += this._model[i];
        }
      }
    }
    return str;
  }

  public updatePath(list: IMultiSelectOption[]) {
    console.log(this._model);
    if (!this._model[0]) {
      return;
    }
    if ( typeof this._model[0] === 'string') {
      this._model.forEach((item: any) => {
        for (let i = 0; i < list.length; i++) {
          console.log(list[i].name , item);
          if (list[i].name === item) {
            list[i].isChecked = true;
            break;
          }
        }
      });
    } else {
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
}
