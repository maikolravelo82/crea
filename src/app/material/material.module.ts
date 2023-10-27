import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatTableModule,MatButtonModule,MatPaginatorModule,MatFormFieldModule,MatIconModule,MatInputModule,
    MatSelectModule,
  ],
  exports: [
    CommonModule,MatTableModule,MatButtonModule,MatPaginatorModule,MatFormFieldModule,MatIconModule,MatInputModule,
    MatSelectModule,
  ]
})
export class MaterialModule { }
