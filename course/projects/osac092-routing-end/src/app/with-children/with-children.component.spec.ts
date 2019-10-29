import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithChildrenComponent } from './with-children.component';

describe('WithChildrenComponent', () => {
  let component: WithChildrenComponent;
  let fixture: ComponentFixture<WithChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
