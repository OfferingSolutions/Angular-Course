import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'withChildren',
    templateUrl: 'withChildren.component.html'
})
export class WithChildrenComponent implements OnInit {
    public id: number;

    constructor(private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.id = id;
        });
    }
}
