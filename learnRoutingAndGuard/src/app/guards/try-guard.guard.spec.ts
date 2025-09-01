import { TestBed } from '@angular/core/testing';

import { TryGuardGuard } from './try-guard.guard';

describe('TryGuardGuard', () => {
  let guard: TryGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TryGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
