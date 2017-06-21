import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {E2EApp} from './e2e-app/e2e-app';
import {MaterialModule} from '@angular/material';
import {FringdTableModule} from 'fringd-table';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FringdTableModule,
    HttpModule,
    MaterialModule,
    NoopAnimationsModule,
  ],
  declarations: [
    E2EApp
  ],
  bootstrap: [E2EApp],
})
export class E2eAppModule { }
