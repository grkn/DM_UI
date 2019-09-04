import { TestBed } from '@angular/core/testing';

import { OracleQueryService } from './oracle-query.service';

describe('OracleQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OracleQueryService = TestBed.get(OracleQueryService);
    expect(service).toBeTruthy();
  });
});
