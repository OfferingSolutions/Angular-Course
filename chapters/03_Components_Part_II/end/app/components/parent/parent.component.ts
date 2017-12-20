import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'parent',
    templateUrl: 'parent.component.html'
})
export class ParentComponent implements OnInit {

    public fruitList: string[] = ['Banana', 'Apples', 'Pineapples'];

    constructor() {

    }

    ngOnInit() { }

    public parentAddItem($event: any) {
        this.fruitList.push($event.name);
    }
}
