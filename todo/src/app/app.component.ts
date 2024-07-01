import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ShellComponent} from "./shell";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ShellComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
