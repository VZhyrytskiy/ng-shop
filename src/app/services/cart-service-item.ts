export class CartServiceItem<TItem> {
    constructor(
        public readonly item: TItem,
        public count: number = 0) {
    }
}