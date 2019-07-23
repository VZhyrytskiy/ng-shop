import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickPropertyChangerDirective } from './directives/click-property-changer.directive';
import { MoneyPipe } from './pipes/money';



@NgModule({
  declarations: [ClickPropertyChangerDirective, MoneyPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ClickPropertyChangerDirective,
    MoneyPipe
  ]
})
export class SharedModule { }
