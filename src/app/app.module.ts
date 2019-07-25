import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from './services/products-service';
import { CartService } from './services/cart-service';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';
import { ApplicationTitleService } from './services/application-title-service';
// лишняя зависимость
// import { LocalStorageService } from './core/services/local-storage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgbModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    CartModule,
    ProductsModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    ProductsService,
    { provide: CartService, useClass: CartService },
    { provide: ApplicationTitleService, useClass: ApplicationTitleService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
