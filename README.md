**Layout Web_Film_123 (19/2/2019)**
---
==VERSION_ANGULAR 7==

**Add Dependencies**
npm install bootstrap jquery popper.js --save

**Add Font Awesom**e
npm install font-awesome angular-font-awesome --save

**Create Module**
0. ng g m TrangChu

**## Create Component**
header, slider, loaiPhim, PhimDangChieu, PhimSapChieu, itemPhim, tinTucdien, AnhReview, KhuyenMai, LienHe, formLienHe, thongTinLienHe

**## Add Owl Carousel**
npm install --save owl.carousel

*** Bõ js vào OnInit (Script được chạy khi Component được hiện ra thì js sẽ được chạy)**
* import $ from 'jquery';
* declare var $:any;

**Thêm Interface (Phương thức) AfterViewInit**
Bõ Script vào Thuộc tính của ngAfterViewInit() {} Khi HTML load xong mới run

**Sử Dụng @Input() ItemPhim**
Tạo Decoreter @Input() ItemPhim trong item-phim.ts
Đưa vào HTML
  <img [src]="ItemPhim.HinhAnh" alt="">
  <p>{{ItemPhim.TenPhim}}</p>
  <button>Xem Thêm</button>

**Dùng *ngFor để lặp itemPhim**

**Dùng *ngIf kết Hợp ng-Template để hiện Danh sách PhimDangChieu hoặc PhimSapChieu**
Dùng Ẩn hiện khi chỉ có 2 Component

**Dùng [ngClass]="{'btn-success': dangChieuStatus}"**

**Dùng [ngSwitch]="loaiTinTuc"**
Dùng khi Ẩn Hiện có 3 Component trở lên
--------------------------------------------------
QUẢN LÝ GHẾ

1. Dùng ngFor lặp ra danh sách ghế
 - Dùng @Input lấy ra Số ghế từ DanhSachGhe
 - Dùng @Output 
    +  (emitStatus)= "DatGheParent($event)"
 - Hàm đặt ghế:
  
  DatGheParent(status, ghe) {
    if (status) {
      this.soGheDaDat++;
      this.soGheConLai--;
      this.DanhSachGheDangDat.push(ghe);
    }
    else {
      this.soGheDaDat--;
      this.soGheConLai++;
      for (let index in this.DanhSachGheDangDat) {
        if (this.DanhSachGheDangDat[index].SoGhe === ghe.SoGhe) {
          this.DanhSachGheDangDat.splice(parseInt(index), 1);
        }
      }
    }
    console.log(this.DanhSachGheDangDat);


  }
  -------------------
  Disable ghế đã ĐƯợc Chọn

  <ng-container *ngIf = "!itemGhe.TrangThai, else gheDaDuocChon">
        <button [ngClass]="{'btn-success': status}" class="btn  mr-2 mb-2" (click)= "DatGhe()">{{itemGhe.SoGhe}}</button>
</ng-container>
<ng-template #gheDaDuocChon> 
        <button class="btn btn-danger  mr-2 mb-2" style="cursor: not-allowed">{{itemGhe.SoGhe}}</button>
</ng-template>

----------------------
EditgheComponent

 // ViewChild đến Danh Sách GHế
  @ViewChild(DanhSachGheComponent) DSGheCom;
-------------------------
  // Truyền mảng tham số ... Spread oparator
  themGheParent(...thamso:any[]){
    let gheDuocThem = {
      TenGhe: thamso[0],
      SoGhe: thamso[1],
      Gia: thamso[2],
      TrangThai:null
    }
    if (thamso[3] == 'false') {
      gheDuocThem.TrangThai = false;
    }
    else{
      gheDuocThem.TrangThai = true;
    }
    console.log(gheDuocThem);

    this.DSGheCom.ThemGhe(gheDuocThem);
    
  }
