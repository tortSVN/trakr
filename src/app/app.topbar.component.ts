import { Component } from '@angular/core';
import { AppComponent} from './app.component';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
  email: string;
  password: string;

  constructor(public app: AppComponent, public authService: AuthService) {}
}
