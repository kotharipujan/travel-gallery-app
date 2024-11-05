import { TestBed } from '@angular/core/testing';

import { GetTravelDestinationService } from './get-travel-destination.service';

describe('GetTravelDestinationService', () => {
  let service: GetTravelDestinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTravelDestinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
