import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedInteractionFrameComponent } from './embedded-interaction-frame.component';

describe('EmbeddedInteractionFrameComponent', () => {
  let component: EmbeddedInteractionFrameComponent;
  let fixture: ComponentFixture<EmbeddedInteractionFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbeddedInteractionFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedInteractionFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
