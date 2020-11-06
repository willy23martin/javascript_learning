import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatSessionsService {

  statusMessage: string;

  constructor() {
    this.statusMessage = '';
  }

  getStatusMessage(): string {
    return this.statusMessage;
  }

  setStatusMessage(statusMessage: string): void {
    this.statusMessage = statusMessage;
  }


}
