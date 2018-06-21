import { TestBed, inject } from '@angular/core/testing';

import { ProfileInfoService } from './profile-info.service';

describe('ProfileInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileInfoService]
    });
  });

  it('should be created', inject([ProfileInfoService], (service: ProfileInfoService) => {
    expect(service).toBeTruthy();
  }));
});
