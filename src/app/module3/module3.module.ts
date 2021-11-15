import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User3Component } from './user3/user3.component';
import { User11Component } from './user11/user11.component';



@NgModule({
  declarations: [
    User3Component,
    User11Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    User3Component,
    User11Component
  ]
})
export class Module3Module { }
