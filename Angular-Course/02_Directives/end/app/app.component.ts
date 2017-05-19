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

    private color: string = 'red';

    public showItem: boolean = true;

    public toggleShowItem() {
        this.showItem = !this.showItem;
    }
}
