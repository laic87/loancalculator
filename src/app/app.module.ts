import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { MaterialModule } from './shared/material.module';
import { LoanDialogComponent } from './loan-dialog/loan-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanFormComponent,
    LoanDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  entryComponents: [
    LoanDialogComponent,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
