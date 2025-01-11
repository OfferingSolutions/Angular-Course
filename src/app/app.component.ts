import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodoComponent} from "./todo/todo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TodoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
