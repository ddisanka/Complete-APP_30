import { TestBed } from '@angular/core/testing';

import { AuthServiceService } from './auth.service.service';

describe('Auth.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthServiceService = TestBed.get(AuthServiceService);
    expect(service).toBeTruthy();
  });
});
