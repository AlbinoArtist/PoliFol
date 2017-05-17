import { TestBed, inject } from '@angular/core/testing';

import { GetPoliticianService } from './get-politician.service';

describe('GetPoliticianService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPoliticianService]
    });
  });

  it('should be created', inject([GetPoliticianService], (service: GetPoliticianService) => {
    expect(service).toBeTruthy();
  }));
});
