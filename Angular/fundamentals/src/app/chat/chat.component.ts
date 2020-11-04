import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {


  termsAndConditions: boolean; // Used with NgModel

  telephones: string[]; // Used with NgIf and NgFor

  // FormGroups:

  customerDataForm: FormGroup;
  submitted = false;

  firstNameNotValidMessage = 'Please insert your name without using especial characters (.,;:ñ´/*+-_?¡¿]}).';
  lastNameNotValidMessage = 'Please insert your name without using especial characters (.,;:ñ´/*+-_?¡¿]}).';
  emailNotValidMessage = 'Please insert your valid email';
  phoneNumberNotValidMessage = 'Please insert your valide fixed phone (7 digits) or cellphone (10 digits)';

  personNameRegExp = new RegExp(`^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`);
  emailRegExp = new RegExp(`^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$`);
  cellPhoneRegExp = new RegExp(`[0-9]{3}[0-9]{3}[0-9]{4}`);
  fixedPhoneRegExp = new RegExp(`[0-9]{3}[0-9]{4}`);


  constructor(private formBuilder: FormBuilder) {
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

  get form(){
    return this.customerDataForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.customerDataForm.invalid){
      return;
    }
    this.onReset();
  }

  onReset(){
    this.submitted=false;
    this.customerDataForm.reset();
  }

}
