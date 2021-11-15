import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User1Component } from './user1/user1.component';
import { Module2Module } from '../module2/module2.module';

@NgModule({
  declarations: [
    User1Component
  ],
  imports: [
    CommonModule,
    Module2Module 
  ],
  exports: [
    User1Component
  ]
})
export class Module1Module { }
