import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-embedded-interaction-frame',
  templateUrl: './embedded-interaction-frame.component.html',
  styleUrls: ['./embedded-interaction-frame.component.scss']
})
export class EmbeddedInteractionFrameComponent implements OnInit {

  @Input() customerData: any;

  @Input() startChat: boolean;

  constructor() { }

  ngOnInit(): void {
    console.warn(this.customerData);
    console.warn(this.startChat);
  }


  startChatInteraction(customerData: any): void{
    this.customerData = customerData;
  }

}
