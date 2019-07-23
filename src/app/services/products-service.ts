import { Product } from '../models/product';
import { Injectable } from '@angular/core';
import { ProductCategory } from '../models/product-category';
import { Observable, of } from 'rxjs';

Injectable({
    providedIn: 'root'
});

export class ProductsService {

    private readonly _allProducts =  [
        this.createProduct(1, 'Product 1', '', 100, true, ProductCategory.Car),
        this.createProduct(2, 'Product 2', '', 200, true, ProductCategory.Hiking),
        this.createProduct(3, 'Product 3', '', 150, false, ProductCategory.Tourism),
    ];

    getAll(): Observable<Product[]> {
        return of(this._allProducts);
    }

    private createProduct(id: number, name: string, description: string, price: number, isAvailable: boolean, category: ProductCategory): Product {
        const product = new Product();
        product.id = id;
        product.name = name;
        product.description = description;
        product.price = price;
        product.isAvailable = isAvailable;
        product.category = category;
        return product;
    }
}
