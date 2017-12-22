import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  value = 'Hello';

  items = [
    {
      name: 'Hans',
      age: 20
    },
    {
      name: 'Franz',
      age: 30
    },
    {
      name: 'Peter',
      age: 40
    },
    {
      name: 'Timo',
      age: 50
    },
    {
      name: 'Hugo',
      age: 60
    }
  ];

  searchString = '';

  date = new Date();
}
