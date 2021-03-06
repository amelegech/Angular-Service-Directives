import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import { ListComponent } from './list.component';

const routes:Routes=[
  {path:"list", component:ListComponent}
]

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[ListComponent]
})
export class ProductModule { }
