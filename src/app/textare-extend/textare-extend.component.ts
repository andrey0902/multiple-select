import { Component, forwardRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
export const EPANDED_TEXTAREA_VALUE_ACCESSO: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextareExtendComponent),
  multi: true,
};
@Component({
  selector: 'app-textare-extend',
  templateUrl: './textare-extend.component.html',
  styleUrls: ['./textare-extend.component.css'],
  providers: [EPANDED_TEXTAREA_VALUE_ACCESSO]
})
export class TextareExtendComponent implements ControlValueAccessor {
  @ViewChild('textarea') public textarea;
  onChange;
  onTouched;
  constructor(private render: Renderer2) { }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    const div = this.textarea.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.render[action](div, 'disabled');
  }

  writeValue(obj: any): void {
    console.log('obj', obj);
    const div = this.textarea.nativeElement;
    this.render.setProperty(div, 'textContent', obj);
  }

  change( $event ) {
    // Angular does not know that the value has changed
    // from our component, so we need to update her with the new value.
    this.onChange($event.target.textContent);
  }
}
