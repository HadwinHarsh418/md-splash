import { TestBed } from '@angular/core/testing';

import { InsuranceStaticService } from './insurance-static.service';

describe('InsuranceStaticService', () => {
  let service: InsuranceStaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceStaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
