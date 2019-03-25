import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="placeholder"></div>

    <button (click)="addWebComponent()">add web component</button>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-elements';

  addWebComponent() {
    const element = document.getElementById('placeholder');
    element.innerHTML = '<web-component></web-component>';
  }
}
