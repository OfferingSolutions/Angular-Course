import { inject, TestBed } from '@angular/core/testing';
import { BasicService } from './basic.service';

describe('Basic Service', () => {
  describe('inject in every test', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [BasicService]
      });
    });

    it('should be created', inject([BasicService], (service: BasicService) => {
      expect(service).toBeTruthy();
    }));
  });

  describe('inject in seperate foreach', () => {
    let service: BasicService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [BasicService]
      });
    });

    beforeEach(inject([BasicService], s => {
      service = s;
    }));

    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('get via testbed.get', () => {
    let service: BasicService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [BasicService]
      });

      service = TestBed.get(BasicService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('basicservice functions', () => {
    let service: BasicService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [BasicService]
      });

      service = TestBed.get(BasicService);
    });

    it('add method adds correct', () => {
      const result = service.add(1, 3);

      expect(result).toBe(4);
    });

    it('add method adds correct', () => {
      spyOn(service, 'add').and.returnValue(6);
      const result = service.add(1, 3);

      expect(result).toBe(6);
    });
  });
});
