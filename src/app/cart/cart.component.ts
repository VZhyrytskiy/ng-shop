import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  productsInCart: Product[] = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.productsInCart = this.cartService.getItems();
  }

}
