import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  loginFormData: FormGroup;

  usernameRegExp = new RegExp(`^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`);

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
    this.loggedIn = false;
    this.loginFormData = this.formBuilder.group({
      username: ['', [Validators.minLength(5), Validators.required, Validators.pattern(this.usernameRegExp)]],
      email: ['', [Validators.required, Validators.email]],
      emailProvider: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  login($event): void {
    this.loggedIn = true;
    this.loginService.setLoggedIn(this.loggedIn);
    const loginData = {
      username: this.loginFormData.get('username').value,
      email: this.loginFormData.get('email').value,
      emailProvider: this.loginFormData.get('emailProvider').value
    };
    this.loginService.login(loginData);
  }

  ssoWithGmail($event): void {
    
  }

}
