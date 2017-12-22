import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() itemList: string[];
  @Output() itemAdded = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public internalAddItem() {
    this.itemAdded.emit({
      name: Math.random()
    });
  }
}
