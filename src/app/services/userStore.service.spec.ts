import { TestBed } from '@angular/core/testing';

import { UserStoreService } from './userStore.service';

describe('UserService', () => {
  let service: UserStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
