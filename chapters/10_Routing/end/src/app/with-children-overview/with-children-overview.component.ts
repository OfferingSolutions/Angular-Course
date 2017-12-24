import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-with-children-overview',
  templateUrl: './with-children-overview.component.html',
  styleUrls: ['./with-children-overview.component.css']
})
export class WithChildrenOverviewComponent implements OnInit {
  parentRouteId: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Get parent ActivatedRoute of	this route.
    this.route.parent.params.forEach(params => {
      this.parentRouteId = +params['id'];
    });
  }
}
