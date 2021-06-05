import { TestBed } from '@angular/core/testing';

import { RetrieveVersionInfoService } from './retrieve-version-info.service';

describe('RetrieveVersionInfoService', () => {
  let service: RetrieveVersionInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrieveVersionInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
