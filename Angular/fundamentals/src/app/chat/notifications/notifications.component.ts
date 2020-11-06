import { Component, OnInit } from '@angular/core';
import { ChatSessionsService } from 'src/app/services/chat-sessions.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notificationMessage: string;

  constructor(private chatSessionsService: ChatSessionsService) {
    this.notificationMessage = '';
  }

  ngOnInit(): void {
    this.notificationMessage = this.chatSessionsService.getStatusMessage();
  }

}
