import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child',
    templateUrl: 'child.component.html'
})
export class ChildComponent implements OnInit {

    @Input() itemList: string[];
    @Output() itemAdded = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    public internalAddItem() {
        this.itemAdded.emit(
            {
                name: Math.random()
            }
        );
    }
}
