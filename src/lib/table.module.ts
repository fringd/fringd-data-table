import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MD_TABLE_DIRECTIVES } from './table.component';
export * from './table.component';
export * from './table-editable/index';
export * from './table-for/index';
export * from './table-header/index';
export * from './table-global-selector/index';
export * from './table-selector/index';

@NgModule({
  declarations: [
    MD_TABLE_DIRECTIVES,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    HttpModule,
  ],
  exports: [
    MD_TABLE_DIRECTIVES,
  ]
})
export class FringdTableModule { }
