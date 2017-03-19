import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'productDetails',
    templateUrl: 'productDetails.component.html'
})
export class ProductDetailsComponent implements OnInit {

    public id: number;

    constructor(private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.id = id;
        });
    }
}
