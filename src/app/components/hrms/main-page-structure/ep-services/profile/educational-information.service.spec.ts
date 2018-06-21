import { TestBed, inject } from '@angular/core/testing';

import { EducationalInformationService } from './educational-information.service';

describe('EducationalInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EducationalInformationService]
    });
  });

  it('should be created', inject([EducationalInformationService], (service: EducationalInformationService) => {
    expect(service).toBeTruthy();
  }));
});
