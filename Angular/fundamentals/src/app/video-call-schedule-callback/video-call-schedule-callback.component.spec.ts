import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCallScheduleCallbackComponent } from './video-call-schedule-callback.component';

describe('VideoCallScheduleCallbackComponent', () => {
  let component: VideoCallScheduleCallbackComponent;
  let fixture: ComponentFixture<VideoCallScheduleCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCallScheduleCallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCallScheduleCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
