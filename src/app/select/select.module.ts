import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { FieldComponent } from './field/field.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SelectComponent,
    FieldComponent,
    ListComponent,
    ItemComponent,
    SearchComponent
  ],
  exports: [
    SelectComponent,
    FieldComponent,
    ListComponent,
    ItemComponent
  ],
  providers: []
})
export class SelectModule {
}
