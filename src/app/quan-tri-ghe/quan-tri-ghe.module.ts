import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GheComponent } from './ghe/ghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { EditDanhSachGheComponent } from './edit-danh-sach-ghe/edit-danh-sach-ghe.component';

@NgModule({
  declarations: [GheComponent, DanhSachGheComponent, EditDanhSachGheComponent],
  imports: [
    CommonModule
  ],
  exports: [GheComponent, DanhSachGheComponent, EditDanhSachGheComponent]
})
export class QuanTriGheModule { }
