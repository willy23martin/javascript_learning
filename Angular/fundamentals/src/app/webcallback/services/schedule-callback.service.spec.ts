import { TestBed } from '@angular/core/testing';

import { ScheduleCallbackService } from './schedule-callback.service';

describe('ScheduleCallbackService', () => {
  let service: ScheduleCallbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleCallbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
