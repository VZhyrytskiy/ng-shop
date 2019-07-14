import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { Product } from '../../models/product';
import { CartServiceItem } from 'src/app/models/cart-service-item';
import { ApplicationTitleService } from 'src/app/services/application-title-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: Array<CartServiceItem<Product>> = [];

  constructor(
    private cartService: CartService,
    private _titleService: ApplicationTitleService
  ) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this._titleService.setTitle('Cart');
  }

}
