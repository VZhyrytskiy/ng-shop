import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';
import { ConstantsService } from './services/constant.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: ConfigOptionsService, useClass: ConfigOptionsService },
    { provide: ConstantsService, useValue: ConstantsService }
  ]
})
export class CoreModule { }
