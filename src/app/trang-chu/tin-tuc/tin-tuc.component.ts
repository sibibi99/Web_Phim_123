import { Component, OnInit, Renderer2, ElementRef, HostListener, HostBinding, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.css']
})
export class TinTucComponent implements OnInit {


  loaiTinTuc:string = "DienAnh";


  constructor(private elementRef:ElementRef, private render: Renderer2) { }

  ChonLoaiTin(val){
    this.loaiTinTuc = val;
       
  }




  ngOnInit() {
  }


}
