import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { FringdTableModule } from 'fringd-table';
import { DemoTableComponent } from './app/demo-table/demo-table.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FringdTableModule,
    HttpModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    DemoTableComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
