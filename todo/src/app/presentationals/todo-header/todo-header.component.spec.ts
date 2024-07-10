import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoHeaderComponent} from './todo-header.component';

describe('TodoHeaderComponent', () => {
  let component: TodoHeaderComponent;
  let fixture: ComponentFixture<TodoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoHeaderComponent);

    fixture.componentRef.setInput('count', 0);
    fixture.componentRef.setInput('openCount', 0);
    fixture.componentRef.setInput('doneCount', 0);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
