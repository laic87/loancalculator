import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";
//import { MatGridListModule } from '@angular/material/grid-list';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
  

@NgModule({
  declarations: [],
  exports: [
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSliderModule,
    MatButtonModule,
  ],
  providers: [],
})
export class MaterialModule { }
