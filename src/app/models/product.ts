import { ProductCategory } from './product-category';

export class Product {
    name: string;

    description: string;

    price: number;

    category: ProductCategory;

    isAvailable: boolean;
}
