import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ApplicationTitleService {

    private _title: string = null;

    get title(): string {
        return this._title;
    }

    constructor() {
    }

    setTitle(value: string): void {
        this._title = value;
    }
}