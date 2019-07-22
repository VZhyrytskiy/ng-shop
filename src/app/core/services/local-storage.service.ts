import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LocalStorageService {
    setItem<TItem>(key: string, item: TItem): void {
        localStorage.setItem(key, this.serialize(item));
    }

    getItem<TItem>(key: string, throwIfNotExists: boolean = false): TItem {
        const item = this.deserialize<TItem>(key);
        if (throwIfNotExists && item == null) {
            throw Error(`Did not find any item by key '${key}'`);
        }
        return item;
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    private serialize<TItem>(item: TItem): string {
        return JSON.stringify(item);
    }

    private deserialize<TItem>(itemJson: string): TItem {
        return JSON.parse(itemJson) as TItem;
    }
}
