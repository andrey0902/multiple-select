import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit } from '@angular/core';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from './shared/type';
import { SelectService } from './shared/service/select.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() settings: IMultiSelectSettings;
  @Input() texts: IMultiSelectTexts;
  @Input() public options: IMultiSelectOption[];
 public get isVisible() {
    return this._isVisible;
  }
  public set isVisible(val: boolean) {
    this._isVisible = val;
    this._workerDocClicked = val ? false : this._workerDocClicked;
  }
  get focusBack(): boolean {
    return this.settings.focusBack && this._focusBack;
  }
  defaultSettings: IMultiSelectSettings = {
    closeOnClickOutside: true,
    pullRight: false,
    enableSearch: false,
    searchRenderLimit: 0,
    searchRenderAfter: 1,
    searchMaxLimit: 0,
    searchMaxRenderedItems: 0,
    checkedStyle: 'checkboxes',
    buttonClasses: 'btn btn-primary dropdown-toggle',
    containerClasses: 'dropdown-inline',
    selectionLimit: 0,
    minSelectionLimit: 0,
    closeOnSelect: false,
    autoUnselect: false,
    showCheckAll: false,
    showUncheckAll: false,
    fixedTitle: false,
    dynamicTitleMaxItems: 3,
    maxHeight: '300px',
    isLazyLoad: false,
    stopScrollPropagation: false,
    loadViewDistance: 1,
    selectAddedValues: false,
    ignoreLabels: false,
    maintainSelectionOrderInTitle: false,
    focusBack: true
  };
  defaultTexts: IMultiSelectTexts = {
    checkAll: 'All',
    uncheckAll: 'Uncheck all',
    checked: 'checked',
    checkedPlural: 'checked',
    searchPlaceholder: 'Search...',
    searchEmptyResult: 'Nothing found...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Select',
    allSelected: 'All selected',
  };
  public filteredOptions: IMultiSelectOption[] = [];
  public title: string;
  public disabled = false;
  public dropdownOpened = new EventEmitter();
  public dropdownClosed = new EventEmitter();
  focusedItem: IMultiSelectOption | undefined;
  private _isVisible = false;
  private _workerDocClicked = false;
  _focusBack = false;

  constructor(private el: ElementRef,
              private service: SelectService) {
    this.settings = this.defaultSettings;
    console.log(this.settings);
    this.texts = this.defaultTexts;
  }

  ngOnInit() {
    this.title = this.texts.defaultTitle || '';
  }

  @HostListener('document: click', ['$event.target'])
  @HostListener('document: touchstart', ['$event.target'])
  onClick(target: HTMLElement) {
    if (!this.isVisible || !this.settings.closeOnClickOutside) { return; }

     if (!this.el.nativeElement.contains(target)) {
       this.isVisible = false;
       this._focusBack = true;
       this.dropdownClosed.emit();
     }
  }

  public toggleDropdown(e: Event) {
    if (this.disabled) {
      return;
    }
    console.log('toggleDropdown');
    this.service.maybeStopPropagation(e);

    if (this.isVisible) {
      this._focusBack = true;
    }

    this.isVisible = !this.isVisible;
    this.isVisible ? this.dropdownOpened.emit() : this.dropdownClosed.emit();
    this.focusedItem = undefined;
  }

  public onSelect(event) {
    console.log('event', event);
    console.log('getModel', this.service.getModel());
    this.updateTitle();
  }

  private updateTitle() {
    console.log('this.settings', this.settings);
    const countTitleShow = this.settings.dynamicTitleMaxItems;
    console.log('this.service.getModel().length >= countTitleShow', this.service.getModel().length, countTitleShow);
    if (this.service.getModel().length <= countTitleShow) {
      const string = this.service.updateTitle(countTitleShow);
      if (string === '') {
        this.title = this.texts.defaultTitle;
      } else {
        this.title = string;
      }
      console.log('this.title', this.title);
    }
  }
}
