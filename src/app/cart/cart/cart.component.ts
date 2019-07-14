import { Component, OnInit, HostListener } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { Product } from '../../models/product';
import { CartServiceItem } from 'src/app/models/cart-service-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: Array<CartServiceItem<Product>> = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

}
