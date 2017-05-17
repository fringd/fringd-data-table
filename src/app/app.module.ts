import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MD_TABLE_DIRECTIVES } from './components/table/table.component';
import { DemoTableComponent } from './demo-table/demo-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MD_TABLE_DIRECTIVES,
    DemoTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
