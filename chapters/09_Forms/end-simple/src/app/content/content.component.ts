import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  firstname = 'Fabian';
  lastname = 'Gosebrink';
  formSubmit(value: any): void {
    console.log(value);
  }
}
