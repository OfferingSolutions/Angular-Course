import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithChildrenRecipeComponent } from './with-children-recipe.component';

describe('WithChildrenRecipeComponent', () => {
  let component: WithChildrenRecipeComponent;
  let fixture: ComponentFixture<WithChildrenRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithChildrenRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithChildrenRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
