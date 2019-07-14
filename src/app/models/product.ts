import { ProductCategory } from './product-category';
import { ICartItem } from './cart-item-base';

export class Product implements ICartItem {

    id: number = 0;

    name: string;

    description: string;

    price: number;

    category: ProductCategory;

    isAvailable: boolean;
}
