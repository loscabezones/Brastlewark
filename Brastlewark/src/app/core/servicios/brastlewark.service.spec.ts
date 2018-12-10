import { TestBed } from '@angular/core/testing';

import { BrastlewarkService } from './brastlewark.service';

describe('BrastlewarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrastlewarkService = TestBed.get(BrastlewarkService);
    expect(service).toBeTruthy();
  });
});
