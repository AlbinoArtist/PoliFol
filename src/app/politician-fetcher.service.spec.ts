import { TestBed, inject } from '@angular/core/testing';

import { PoliticianFetcherService } from './politician-fetcher.service';

describe('PoliticianFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoliticianFetcherService]
    });
  });

  it('should be created', inject([PoliticianFetcherService], (service: PoliticianFetcherService) => {
    expect(service).toBeTruthy();
  }));
});
