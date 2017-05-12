import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Component({
    selector: 'productDetails',
    templateUrl: 'productDetails.component.html'
})
export class ProductDetailsComponent implements OnInit {

    public id: Observable<number>;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // this._route.params.forEach((params: Params) => {
        //     let id = +params['id'];
        //     this.id = id;
        // });

        // this.id = this.route
        //     .queryParams
        //     .map(params => +params['id'] || -1);

        this.id = this.route.paramMap
            .map(paramMap => +paramMap.get('id') || -1);
    }
}
