import { TestBed } from '@angular/core/testing';

import { AmbasPaginasService } from './envio-receptor.service';

describe('AmbasPaginasService', () => {
  let service: AmbasPaginasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbasPaginasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
