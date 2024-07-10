import {TestBed} from '@angular/core/testing';

import {TodoService} from './todo.service';
import {MockProvider} from "ng-mocks";
import {HttpClient} from "@angular/common/http";

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProvider(HttpClient)]
    });
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
