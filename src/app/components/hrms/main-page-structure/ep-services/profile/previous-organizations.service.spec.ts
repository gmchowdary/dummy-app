import { TestBed, inject } from '@angular/core/testing';

import { PreviousOrganizationsService } from './previous-organizations.service';

describe('PreviousOrganizationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreviousOrganizationsService]
    });
  });

  it('should be created', inject([PreviousOrganizationsService], (service: PreviousOrganizationsService) => {
    expect(service).toBeTruthy();
  }));
});
