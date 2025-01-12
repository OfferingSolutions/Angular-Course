import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailFormComponent } from './todo-detail-form.component';

describe('TodoDetailFormComponent', () => {
  let component: TodoDetailFormComponent;
  let fixture: ComponentFixture<TodoDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoDetailFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
