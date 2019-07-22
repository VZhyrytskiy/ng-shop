import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})

export class ConfigOptionsService {

    constructor(private readonly _localStorage: LocalStorageService) {
    }

    get login(): string {
        return this._localStorage.getItem('login');
    }

    set login(value: string) {
        this._localStorage.setItem('login', value);
    }

    get email(): string {
        return this._localStorage.getItem('email');
    }

    set email(value: string) {
        this._localStorage.setItem('email', value);
    }
}
