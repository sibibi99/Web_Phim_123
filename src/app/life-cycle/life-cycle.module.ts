import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoChildComponent } from './demo-child/demo-child.component';
import { DemoParentComponent } from './demo-parent/demo-parent.component';

@NgModule({
  declarations: [DemoChildComponent, DemoParentComponent],
  imports: [
    CommonModule
  ]
})
export class LifeCycleModule { }
