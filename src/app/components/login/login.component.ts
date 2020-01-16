import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { BreadcrumbService } from 'src/app/breadcrumb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthService, public breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([
      { label: 'Login' },
      { label: 'Login', routerLink: ['/login'] }
    ]);
  }

  signup(){
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login(){
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout(){
    this.authService.logout();
  }

}
