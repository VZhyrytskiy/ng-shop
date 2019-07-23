import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './static-pages/about/about.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HeaderComponent, AboutComponent],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class LayoutModule { }
