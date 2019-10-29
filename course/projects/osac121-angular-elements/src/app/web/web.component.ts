import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  template: `
    <p>web-component works! {{ name }}</p>
    <button (click)="buttonClick()">Click me</button>
  `,
  styles: [],
})
export class WebComponent implements OnInit {
  @Input() name;

  @Output() buttonClicked = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  buttonClick() {
    this.buttonClicked.emit();
  }
}
