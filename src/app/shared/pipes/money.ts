import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'money'})

export class MoneyPipe implements PipeTransform {
    transform(value: any, ...args: any[]): string {

        if (value == null) {
            return value;
        }

        const numberValue = this.convertToNumber(value);
        if (numberValue == null) {
            return value;
        }

        return numberValue + ' points';
    }

    private convertToNumber(value: any): Number {
        const numberValue = Number(value);
        return isNaN(numberValue) ? null : numberValue;
    }
}
