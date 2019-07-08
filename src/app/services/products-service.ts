import { Product } from '../models/product';
import { Injectable } from '@angular/core';

Injectable({
    providedIn: 'root'
})
export class ProductsService {
    getAll(): Product[] {
        return [
            this.createProduct('Product 1', '', 100, true),
            this.createProduct('Product 2', '', 200, true),
            this.createProduct('Product 3', '', 150, false),
        ];
        
    }

    private createProduct(name: string, description: string, price: number, isAvailable: boolean): Product {
        const product = new Product();
        product.name = name;
        product.description = description;
        product.price = price;
        product.isAvailable = isAvailable;
        return product;
    }
}
