import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './static-pages/about/about.component';



@NgModule({
  declarations: [HeaderComponent, AboutComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class LayoutModule { }
