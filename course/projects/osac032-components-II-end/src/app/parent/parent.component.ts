import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public fruitList: string[] = ['Banana', 'Apples', 'Pineapples'];

  constructor() {}

  ngOnInit() {}

  public parentAddItem($event: any) {
    this.fruitList.push($event.name);
  }
}
