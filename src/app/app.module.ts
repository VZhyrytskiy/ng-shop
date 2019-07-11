import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './services/products-service';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart-service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // ProductsService, // этот сервис уже зарегистрирован через его собственный декоратор
    // CartService // аналогично
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Не нашел changelog файл.
// При старте подумал, что вы ничего не реализовали
// Но когда глянул код, то увидел, что используете роутинг.
