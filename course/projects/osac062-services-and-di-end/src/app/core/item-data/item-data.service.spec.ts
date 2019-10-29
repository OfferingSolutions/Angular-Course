import { TestBed, inject } from '@angular/core/testing';

import { ItemDataService } from './item-data.service';

describe('ItemDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemDataService]
    });
  });

  it('should be created', inject([ItemDataService], (service: ItemDataService) => {
    expect(service).toBeTruthy();
  }));
});
