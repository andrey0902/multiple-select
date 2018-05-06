import { Component, forwardRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-costom-text-area',
  templateUrl: './costom-text-area.component.html',
  styleUrls: ['./costom-text-area.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CostomTextAreaComponent),
      multi: true,
    }]
})
export class CostomTextAreaComponent implements OnInit, ControlValueAccessor {
  @ViewChild('textarea') public textarea;
  public parseError: boolean;
  public data: any;
  onTouched;
  onChange;
  public jsonString;
  constructor(private render: Renderer2) { }

  ngOnInit() {
  }

  public change($event) {
    const newValue = $event.target.value;
    this.onChange(newValue);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    const area = this.textarea.nativeElement;
    const action: any = isDisabled ? 'setAttribute' : 'removeAttribute';
    // tslint:disabled
    this.render[action](area, 'disabled');
  }

  writeValue(obj: any): void {
    if (obj) {
      this.jsonString = obj;
      this.data = obj;
    }
  }

}
