import { TestBed, inject } from '@angular/core/testing';

import { HerosDataService } from './heros-data.service';

describe('HerosDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerosDataService]
    });
  });

  it('should ...', inject([HerosDataService], (service: HerosDataService) => {
    expect(service).toBeTruthy();
  }));
});
