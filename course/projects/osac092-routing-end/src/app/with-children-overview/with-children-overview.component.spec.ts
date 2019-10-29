import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithChildrenOverviewComponent } from './with-children-overview.component';

describe('WithChildrenOverviewComponent', () => {
  let component: WithChildrenOverviewComponent;
  let fixture: ComponentFixture<WithChildrenOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithChildrenOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithChildrenOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
