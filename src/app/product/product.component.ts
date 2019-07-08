import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor() { }

  ngOnInit() {
  }

  buy(): void {
    // TODO implement
    console.log(`You has bought the product '${this.product.name}'`);
  }

}
