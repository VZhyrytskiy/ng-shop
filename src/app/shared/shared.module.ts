import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickPropertyChangerDirective } from './directives/click-property-changer.directive';



@NgModule({
  declarations: [ClickPropertyChangerDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ClickPropertyChangerDirective
  ]
})
export class SharedModule { }
