import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChatSessionsService } from '../services/chat-sessions.service';
import { EmbeddedInteractionFrameComponent } from './embedded-interaction-frame/embedded-interaction-frame.component';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild('app-embedded-interaction-frame') embeddedInteractionIframe: EmbeddedInteractionFrameComponent;

  startChat: boolean;

  termsAndConditions: boolean; // Used with NgModel

  telephones: string[]; // Used with NgIf and NgFor

  // FormGroups:

  customerDataForm: FormGroup;
  submitted = false;

  firstNameNotValidMessage = 'Please insert your name without using especial characters (.,;:ñ´/*+-_?¡¿]}).';
  lastNameNotValidMessage = 'Please insert your name without using especial characters (.,;:ñ´/*+-_?¡¿]}).';
  emailNotValidMessage = 'Please insert your valid email';
  phoneNumberNotValidMessage = 'Please insert your valid fixed phone (7 digits) or cellphone (10 digits)';

  personNameRegExp = new RegExp(`^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`);
  emailRegExp = new RegExp(`^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$`);
  cellPhoneRegExp = new RegExp(`[0-9]{3}[0-9]{3}[0-9]{4}`);
  fixedPhoneRegExp = new RegExp(`[0-9]{3}[0-9]{4}`);


  constructor(private formBuilder: FormBuilder, private chatSessionService: ChatSessionsService) {
    this.startChat = false;
    this.telephones = [];
    this.customerDataForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.personNameRegExp)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.personNameRegExp)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern(this.fixedPhoneRegExp) || Validators.pattern(this.cellPhoneRegExp)]]
    });
  }

  ngOnInit(): void {
    this.telephones[0] = '919999999';
  }

  getCustomerData(): any {
    const customerData = {
      name: this.customerDataForm.get('name').value,
      lastName: this.customerDataForm.get('lastName').value,
      email: this.customerDataForm.get('email').value,
      telephone: this.customerDataForm.get('telephone').value
    };
    return customerData;
  }

  onSubmit(): void {
    console.log('Submitted was clicked');
    this.submitted = true;
    if (this.customerDataForm.invalid) {
      console.error('Invalid form', this.customerDataForm);
      return;
    } else {
      console.log('Chat was started');
      this.startChat = true;
      this.chatSessionService.setStatusMessage('Chat was started');
    }
    // this.onReset();
  }

  onReset(): void {
    this.submitted = false;
    this.startChat = false;
    this.customerDataForm.reset();
    this.chatSessionService.setStatusMessage('');
  }

  finishChat($event): void {
    console.warn('Chat was: ', $event);
    this.onReset();
  }

}
