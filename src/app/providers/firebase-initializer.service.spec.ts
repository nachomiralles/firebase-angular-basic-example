import { TestBed } from '@angular/core/testing';

import { FirebaseInitializerService } from './firebase-initializer.service';

describe('FirebaseInitializerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseInitializerService = TestBed.get(FirebaseInitializerService);
    expect(service).toBeTruthy();
  });
});
