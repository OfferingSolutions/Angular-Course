import {Component} from '@angular/core';
import {TodoComponent} from "./containers/todo/todo.component";
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-root',
    imports: [
        TodoComponent,
        RouterOutlet
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {}
