import { Product } from '../models/product';
import { Injectable } from '@angular/core';
import { ProductCategory } from '../models/product-category';

Injectable({
    providedIn: 'root'
});

export class ProductsService {
    getAll(): Product[] {
        return [
            this.createProduct('Product 1', '', 100, true, ProductCategory.Car),
            this.createProduct('Product 2', '', 200, true, ProductCategory.Hiking),
            this.createProduct('Product 3', '', 150, false, ProductCategory.Tourism),
        ];
    }

    private createProduct(name: string, description: string, price: number, isAvailable: boolean, category: ProductCategory): Product {
        const product = new Product();
        product.name = name;
        product.description = description;
        product.price = price;
        product.isAvailable = isAvailable;
        product.category = category;
        return product;
    }
}
