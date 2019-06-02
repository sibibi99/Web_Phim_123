import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DanhSachGheComponent } from '../danh-sach-ghe/danh-sach-ghe.component';

@Component({
  selector: 'app-edit-danh-sach-ghe',
  templateUrl: './edit-danh-sach-ghe.component.html',
  styleUrls: ['./edit-danh-sach-ghe.component.css']
})
export class EditDanhSachGheComponent implements OnInit {

  // ViewChild đến Danh Sách GHế
  @ViewChild(DanhSachGheComponent) DSGheCom;

  // ViewChild đến Local Referent
  @ViewChild('title') titleHeading:ElementRef;

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
    this.titleHeading.nativeElement.innerHTML = "Da Them";
    
  }

  constructor() { }

  ngOnInit() {
  }

}
