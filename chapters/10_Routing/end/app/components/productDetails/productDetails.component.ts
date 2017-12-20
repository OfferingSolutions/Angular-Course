import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs/Observable';

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

        this.id = this.route.snapshot.queryParamMap.get('id');
    }
}
