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

