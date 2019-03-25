import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-component',
  templateUrl: './web-component.component.html',
  styleUrls: ['./web-component.component.css'],
})
export class WebComponentComponent implements OnInit {
  @Input() name;
  constructor() {}

  ngOnInit() {}
}
