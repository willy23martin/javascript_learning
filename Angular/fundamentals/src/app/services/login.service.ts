import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  profile: any = undefined;
  emailProviderUserToken: string; // Stored in session storage.
  emailProviderUserId: string;

  loggedIn: boolean;
  customerLoginData: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.loggedIn = false;
    this.customerLoginData = {};
  }

  login(loginData: any): void {
    this.customerLoginData = {
      username: loginData.username,
      email: loginData.email,
      emailProvider: loginData.emailProvider
    };
    this.router.navigate(['chat']);
  }

  setLoggedIn(loggedIn: boolean): void {
    this.loggedIn = loggedIn;
  }

  getLoggedIn(): boolean {
    return this.loggedIn;
  }

}
