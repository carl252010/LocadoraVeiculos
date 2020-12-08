import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { VeiculosService } from './veiculos.service';

describe('VeiculosService', () => {
  let service: VeiculosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[VeiculosService]
    });
    service = TestBed.inject(VeiculosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable', () => {
    service.recuperarCadastro('mockId')
      .subscribe((result: Array<any>) => {
        expect(result.length).toBe(2);
      });
  
    const req = httpMock.expectOne(`${service.baseUrl}/single/mockId`);
    expect(req.request.url).toBe(`${service.baseUrl}/single/mockId`);
  
    req.flush([1,2]);
  });
});
