import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent {

    constructor() {
        let data = new Observable((observer: Observer<number>) => {
            setTimeout(() => {
                observer.next(42);
            }, 1000);

            setTimeout(() => {
                observer.next(43);
            }, 2000);

            setTimeout(() => {
                observer.complete();
            }, 3000);
        });

        let subscription = data
            // .map(x => <number>x + 1)
            .subscribe((value: number) => {
                console.log(value);
            },
            (error: number) => {
                console.log(error);
            },
            () => console.log('finished'));



        // subscription.unsubscribe();
    }
}
