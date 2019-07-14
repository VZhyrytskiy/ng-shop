import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from './products-service';
import { CartServiceItem } from './cart-service-item';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private items: Array<CartServiceItem<Product>> = [];

    constructor(private productsService: ProductsService) {
    }

    getItems(): Product[] {
        return this.items.map(x => x.item);
    }

    add(product: Product): void {
        
        const item = this.items.find(x => x.item.id === product.id);
        if (item != null) {
            item.count++;
        } else {
            this.items.push(this.createCartServiceItem(product));
        }
    }

    private createCartServiceItem(product: Product): CartServiceItem<Product> {
        return new CartServiceItem<Product>(this.copyObject(product));
    }

    private copyObject<T>(object: T): T {
        return JSON.parse(JSON.stringify(object));
    }
}
