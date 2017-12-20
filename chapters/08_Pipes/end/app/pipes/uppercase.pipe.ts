import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'myUppercase'
})

@Injectable()
export class UppercasePipe implements PipeTransform {
    transform(value: string): string {
        if (!value) {
            return null;
        }

        return value.toUpperCase();
    }
}
