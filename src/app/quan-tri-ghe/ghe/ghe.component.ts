import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {
  @Input() itemGhe: any;
  status:boolean = false;

  @Output() emitStatus = new EventEmitter;

  DatGhe(){
    if (this.status){
      this.status = false;
    }
    else{
      this.status = true;
    }


    this.emitStatus.emit(this.status);
  }

  constructor() { }

  ngOnInit() {
  }

}
