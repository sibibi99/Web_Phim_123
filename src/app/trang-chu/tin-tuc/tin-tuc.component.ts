import { Component, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.css']
})
export class TinTucComponent implements OnInit {
  loaiTinTuc:string = "DienAnh";
  tinTucStatus:boolean = true;
  element: any;

  constructor(private elementRef:ElementRef, private render: Renderer2) { }

  ChonLoaiTin(val){
    this.loaiTinTuc = val;   
  }




  ngOnInit() {
  }


}
