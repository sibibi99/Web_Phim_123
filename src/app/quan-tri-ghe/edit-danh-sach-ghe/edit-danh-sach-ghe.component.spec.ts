import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDanhSachGheComponent } from './edit-danh-sach-ghe.component';

describe('EditDanhSachGheComponent', () => {
  let component: EditDanhSachGheComponent;
  let fixture: ComponentFixture<EditDanhSachGheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDanhSachGheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDanhSachGheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
