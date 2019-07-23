import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart-service';
import { ApplicationTitleService } from 'src/app/services/application-title-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    public productsService: ProductsService,
    private _cartService: CartService,
    private _titleService: ApplicationTitleService
  ) {
    this._titleService.setTitle('Products');
    this.productsService.getAll().subscribe(result => {
      this.products = result;
    });
   }

  ngOnInit() {
  }

  buyItemClicked(product: Product): void {
    this._cartService.add(product);
  }
}
