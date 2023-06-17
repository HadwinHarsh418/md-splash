import { Component } from '@angular/core';
import { AuthenticationService } from './_helpers/auth/authentication.service';
import { ApiService } from './_helpers/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-App';
  constructor(
    private authService: AuthenticationService,
    private apisService: ApiService,
  ) {
    if(this.authService.currentUserValue && this.authService.currentUserValue.token) {
      this.apisService.getUserAddresses(this.authService.currentUserValue.user_id);
    }
  }
}
