import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  @Output()
  buyItemClicked: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  buy(): void {
    if (this.product.isAvailable) {
      this.buyItemClicked.emit(this.product);
    }
  }

}
