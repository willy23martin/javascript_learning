import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  name: string;
  lastName: string;
  email: string;
  telephone: string;
  termsAndConditions: boolean;

  constructor() {
    this.name = "Name";
    this.lastName = "Last Name";
    this.email = "email@domain.subdomain";
    this.telephone = "+572 31919191919";
    this.termsAndConditions = false;
   }

  ngOnInit(): void {
  }

}
