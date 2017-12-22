import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlightDirective implements OnInit {
  @Input() appMyHighlight: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.appMyHighlight;
  }
}
