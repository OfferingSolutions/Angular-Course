import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AsyncService } from './async.service';

describe('Asyncservice', () => {
  describe('testing with real service', () => {
    let service: AsyncService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [AsyncService]
      });

      service = TestBed.get(AsyncService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should get the name', async(() => {
      service.getNameASync().subscribe(name => {
        expect(name).toBe('Fabian');
      });
    }));

    it('should get the name - version 2', fakeAsync(() => {
      let value;
      service.getNameASync().subscribe(name => (value = name));

      expect(value).not.toBeDefined();
      tick(1000);
      expect(value).not.toBeDefined();
      tick(1000);
      expect(value).toBeDefined();
      expect(value).toBe('Fabian');
    }));
  });

  describe('Asyncservice with a spy', () => {
    let service: AsyncService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [AsyncService]
      });

      service = TestBed.get(AsyncService);
    });

    it('should get the name with a spy', async(() => {
      const mySpy = spyOn(service, 'getNameASync').and.returnValue(
        of('SpyFabian').pipe(delay(500))
      );

      service.getNameASync().subscribe(name => expect(name).toBe('SpyFabian'));

      expect(mySpy.calls.any()).toBe(true);
    }));
  });

  // describe('Asyncservice with fake service', () => {
  //   class FakeAsyncService {
  //     getNameASync(): Observable<string> {
  //       return new Observable((observer: Observer<string>) => {
  //         setTimeout(() => {
  //           observer.next('Hallo');
  //           observer.complete();
  //         }, 2000);
  //       });
  //     }
  //   }

  //   let service: AsyncService;

  //   beforeEach(() => {
  //     TestBed.configureTestingModule({
  //       providers: [{ provide: AsyncService, useClass: FakeAsyncService }]
  //     });

  //     service = TestBed.get(AsyncService);
  //   });

  //   it('should get the name', async(() => {
  //     service.getNameASync().subscribe(name => {
  //       expect(name).toBe('Fabian');
  //     });
  //   }));
  // });
});
