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

  // можно объявить как tuple и вернуть из сервиса
  totalCosts = 0;
  totalCount = 0;

  get itemsCount(): number {
    return this.cartItems.length;
  }

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.calculateTotalValues();
  }

  itemChanged(item: CartServiceItem<Product>): void {
    this.calculateTotalValues();
  }

  private calculateTotalValues(): void {
    this.totalCosts = this.cartService.getTotalCosts();
    this.totalCount = this.cartService.getTotalItemsCount();
  }
}
