import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { CustomHttpService } from './http.service';

describe('CustomHttpService', () => {
  let service: CustomHttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomHttpService]
    });

    service = TestBed.get(CustomHttpService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the name of the correct star wars character', async(() => {
    service.getSingle(1).subscribe((data: any) => {
      expect(data.name).toBe('Luke Skywalker');
    });

    const req = httpMock.expectOne('http://replace.with.api/anything/1');

    expect(req.request.method).toBe('GET');

    req.flush({
      name: 'Luke Skywalker'
    });

    httpMock.verify();
  }));
});
