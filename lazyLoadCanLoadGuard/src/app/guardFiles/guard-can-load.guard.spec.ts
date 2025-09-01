import { TestBed } from '@angular/core/testing';

import { GuardCanLoadGuard } from './guard-can-load.guard';

describe('GuardCanLoadGuard', () => {
  let guard: GuardCanLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardCanLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
