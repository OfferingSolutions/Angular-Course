import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'withChildrenRecipe',
    templateUrl: 'withChildrenRecipe.component.html'
})
export class WithChildrenRecipeComponent implements OnInit {
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
