import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})

export class HighlightDirective implements OnInit {

    @Input('myHighlight') colorFromTheOutside: string;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = this.colorFromTheOutside;
    }
}
