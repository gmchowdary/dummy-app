import { TestBed, inject } from '@angular/core/testing';

import { IdProofsService } from './id-proofs.service';

describe('IdProofsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdProofsService]
    });
  });

  it('should be created', inject([IdProofsService], (service: IdProofsService) => {
    expect(service).toBeTruthy();
  }));
});
