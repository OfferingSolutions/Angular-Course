import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent {
    public value: string = 'Hello';

    public items = [
        {
            name: 'Hans', age: 20,
        }, {
            name: 'Franz', age: 30,
        }, {
            name: 'Peter', age: 40,
        }, {
            name: 'Timo', age: 50,
        }, {
            name: 'Hugo', age: 60,
        }
    ];

    public searchString = '';

    public date = new Date();
}
