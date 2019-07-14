import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartServiceItem } from '../models/cart-service-item';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private items: Array<CartServiceItem<Product>> = [];

    constructor() {
        console.log('CartService instance created.');
    }

    getItems(): Array<CartServiceItem<Product>> {
        return this.items;
    }

    add(product: Product): void {
        
        const item = this.items.find(x => x.item.id === product.id);
        if (item != null) {
            item.count++;
            console.log(`increased count for ${item.item.name}`);
        } else {
            this.items.push(this.createCartServiceItem(product));
            console.log(`Added item ${product.name}`);
        }
    }

    remove(item: CartServiceItem<Product>): void {
        this.items = this.items.filter(x => x.itemId !== item.itemId);
        console.log(`Removed item ${item.item.name}`);
    }

    getTotalCosts(): number {
        let totalCosts = 0;
        this.items.map(x => x.cost).forEach(x => totalCosts += x);
        return totalCosts;
    }

    getTotalItemsCount(): number {
        let totalCount = 0;
        this.items.map(x => x.count).forEach(x => totalCount += x);
        return totalCount;
    }

    private createCartServiceItem(product: Product): CartServiceItem<Product> {
        return new CartServiceItem<Product>(this.copyObject(product));
    }

    private copyObject<T>(object: T): T {
        return JSON.parse(JSON.stringify(object));
    }
}
