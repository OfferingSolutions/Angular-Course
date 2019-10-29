import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  items: string[] = ['Hamburger', 'Pommes', 'Schnitzel'];

  private color = 'red';

  showItem = true;

  toggleShowItem() {
    this.showItem = !this.showItem;
  }
}
