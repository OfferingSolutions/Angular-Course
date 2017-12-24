import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-with-children',
  templateUrl: './with-children.component.html',
  styleUrls: ['./with-children.component.css']
})
export class WithChildrenComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const id = +params['id'];
      this.id = id;
    });
  }
}
