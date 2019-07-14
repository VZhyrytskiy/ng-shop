import { ICartItem } from './cart-item-base';

export class CartServiceItem<TItem extends ICartItem> {
    constructor(
        public readonly item: TItem,
        public count: number = 0) {
        if (item == null) {
            throw Error('Cannot work with null item');
        }
        if (count < 0) {
            throw Error('Count should be equal to zero or positive number');
        }
    }

    public get itemId(): number {
        return this.item.id;
    }

    public get cost(): number {
        return this.item.price * this.count;
    }

    addOne(): void {
        this.count++;
    }

    removeOne(): void {

        if (this.count === 0) {
            return;
        }
        this.count--;
    }
}