import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DummyComponent } from './dummy.component';
import { HoverHighlightDirective } from './highlight.directive';

describe('Highlight-Directive', () => {
  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;
  let element: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummyComponent, HoverHighlightDirective]
    });

    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.css('#forTesting'));
  });

  it('Should create an instance', () => {
    const directive = new HoverHighlightDirective();
    expect(directive).toBeTruthy();
  });

  it('hovering over span should change colors', () => {
    element.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(element.nativeElement.style.backgroundColor).toBe('blue');

    element.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(element.nativeElement.style.backgroundColor).toBe('inherit');
  });
});
