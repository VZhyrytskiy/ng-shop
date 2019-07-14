import { ProductCategory } from './product-category';

export class Product {

    id: number = 0;

    name: string;

    description: string;

    price: number;

    category: ProductCategory;

    isAvailable: boolean;
}
