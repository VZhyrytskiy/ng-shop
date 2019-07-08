import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from './products-service';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private productsService: ProductsService) {
    }

    getItems(): Product[] {
        return this.productsService.getAll();
    }
}
