import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';
import { AppConstants } from './services/constant.service';
import { GeneratorService } from './services/generator/generator.service';

let generatorServiceFactory = () => {
  return new GeneratorService();
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: ConfigOptionsService, useClass: ConfigOptionsService },
    { provide: AppConstants, useValue: AppConstants },
    // Тут надо сделать так, чтобы токен GeneratorService уже ссылался на случайную последовательность
    // а не на экземпляр класса GeneratorService
    // Посмотрите еще раз как это сделано в презентации или в демо проекте.
    { provide: GeneratorService, useFactory: generatorServiceFactory },
  ]
})
export class CoreModule { }
