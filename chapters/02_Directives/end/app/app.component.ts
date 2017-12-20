import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent {
    items: string[] = [
        'Hamburger',
        'Pommes',
        'Schnitzel'
    ];

    private color = 'red';

    showItem = true;

    toggleShowItem() {
        this.showItem = !this.showItem;
    }
}
