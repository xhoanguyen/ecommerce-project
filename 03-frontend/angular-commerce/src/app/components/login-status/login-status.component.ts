import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css'],
})
export class LoginStatusComponent implements OnInit {
  isAuthenticated: boolean = false;
  userFullName: string = '';

  constructor(
    private oktaAuthService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth
  ) {}

  ngOnInit(): void {
    // Subcribe to authentication state changes on oktaAuthService

    this.oktaAuthService.authState$.subscribe((result) => {
      this.isAuthenticated = result.isAuthenticated!;
      this.getUserDatails();
    });
  }
  getUserDatails() {
    if (this.isAuthenticated) {
      // Fetch the logged in user details (user claims)
      // exposed as property name

      this.oktaAuth.getUser().then((res) => {
        this.userFullName = res.name as string;
      });
    }
  }
  logout() {
    // Terminates the session woth Okta and remove current token
    this.oktaAuth.signOut();
  }
}
