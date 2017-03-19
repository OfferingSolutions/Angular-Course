import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'withChildrenOverview',
    templateUrl: 'withChildrenOverview.component.html'
})
export class WithChildrenOverviewComponent implements OnInit {
    public parentRouteId: number;

    constructor(private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        // Get parent ActivatedRoute of	this route.	
        this.route.parent.params.forEach((params) => {
            this.parentRouteId = +params['id'];
        });
    }
}
