import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatCheckboxModule, MatListModule, MatButtonModule, MatRippleModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatPaginatorModule, MatTableModule, MatSlideToggleModule, MatButtonToggleModule, MatDialogModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatDialogModule
  ],
  declarations: [],
  exports:[
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
