import { Component, OnInit, Input, HostListener } from '@angular/core';
import { CartServiceItem } from 'src/app/models/cart-service-item';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input()
  item: CartServiceItem<Product>;

  public hovered: boolean = false;

  @HostListener('mouseenter') 
  onMouseEnter() {
    this.hovered = true;
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.hovered = false;
  }

  constructor() { }

  ngOnInit() {
    if (this.item == null) {
      throw Error('Item should not be null');
    }
  }

}
