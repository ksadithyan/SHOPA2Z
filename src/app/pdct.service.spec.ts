import { TestBed } from '@angular/core/testing';

import { PdctService } from './pdct.service';

describe('PdctService', () => {
  let service: PdctService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdctService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
