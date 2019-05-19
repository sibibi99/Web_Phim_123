import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { DienAnhComponent } from './dien-anh/dien-anh.component';
import { ReViewComponent } from './re-view/re-view.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { FormLienHeComponent } from './form-lien-he/form-lien-he.component';
import { ThongTinLienHeComponent } from './thong-tin-lien-he/thong-tin-lien-he.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { ItemTinTucComponent } from './item-tin-tuc/item-tin-tuc.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SliderComponent, LoaiPhimComponent, PhimSapChieuComponent, PhimDangChieuComponent, ItemPhimComponent, TinTucComponent, DienAnhComponent, ReViewComponent, KhuyenMaiComponent, LienHeComponent, FormLienHeComponent, ThongTinLienHeComponent, TrangChuComponent, ItemTinTucComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, SliderComponent, LoaiPhimComponent, PhimSapChieuComponent, PhimDangChieuComponent, ItemPhimComponent, TinTucComponent, DienAnhComponent, ReViewComponent, KhuyenMaiComponent, LienHeComponent, FormLienHeComponent, ThongTinLienHeComponent, TrangChuComponent, ItemTinTucComponent]
})
export class TrangChuModule { }
