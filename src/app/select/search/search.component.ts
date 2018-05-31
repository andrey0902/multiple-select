import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input() public settings;
  @Input() public texts;
  @Output() search: EventEmitter<string> = new EventEmitter();
  public filterControl: FormControl;
  public destroyed$ = new Subject();
  constructor() { }

  ngOnInit() {
    this.createControl();
  }

  public createControl() {
    this.filterControl = new FormControl(null);
    this.subscribeChangeValue();
  }

  public subscribeChangeValue() {
    this.filterControl.valueChanges
      .pipe(debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.destroyed$))
      .subscribe(val => {
        this.search.emit(val);
      });
  }

  public clearSearch() {
    this.filterControl.patchValue(null);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

}
