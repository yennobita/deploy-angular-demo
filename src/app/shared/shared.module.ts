import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDirectiveDirective } from './my-directive.directive';



@NgModule({
  declarations: [
    MyDirectiveDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
