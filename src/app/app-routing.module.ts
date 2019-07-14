import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartComponent } from './cart/cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  { path: 'product-list', component: ProductListComponent, pathMatch:'full' },
  { path: 'cart', component: CartComponent, pathMatch:'full' },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
