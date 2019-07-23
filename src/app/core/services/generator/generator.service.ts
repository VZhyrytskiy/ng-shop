import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class GeneratorService {

    private readonly _characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    // Copied and refactored from https://stackoverflow.com/a/1349426
    public makeRandomString(length: number): string {

        if (length == null || length <= 0) {
            throw Error('Invalid number passed');
        }

        let result = '';

        const charLength = this._characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += this._characters.charAt(this.getRandomNumber(charLength));
        }

        return result;
     }

     public getRandomNumber(maxValue: number): number {
        if (maxValue == null || maxValue <= 0) {
            throw Error('Invalid number passed');
        }
        return Math.floor(Math.random() * maxValue);
     }
}
