import { TestBed } from '@angular/core/testing';

import { ChatSessionsService } from './chat-sessions.service';

describe('ChatSessionsService', () => {
  let service: ChatSessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatSessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
