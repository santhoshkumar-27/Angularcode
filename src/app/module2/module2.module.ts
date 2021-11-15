import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User2Component } from './user2/user2.component';
import { Module3Module } from '../module3/module3.module';
import { User3Component } from '../module3/user3/user3.component';


@NgModule({
  declarations: [
    User2Component
  ],
  imports: [
    CommonModule,
    Module3Module
  ],
  exports: [
    User2Component
  ]
})
export class Module2Module { }
