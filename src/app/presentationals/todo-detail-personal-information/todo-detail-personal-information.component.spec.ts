import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailPersonalInformationComponent } from './todo-detail-personal-information.component';

describe('TodoDetailPersonalInformationComponent', () => {
  let component: TodoDetailPersonalInformationComponent;
  let fixture: ComponentFixture<TodoDetailPersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoDetailPersonalInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDetailPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
