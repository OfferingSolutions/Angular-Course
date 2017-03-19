import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html'
})


export class HomeComponent {

    constructor(private router: Router) {

    }

    public navigate = (): void => {
        this.router.navigate(['/products']);
    }
}
