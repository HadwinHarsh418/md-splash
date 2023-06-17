import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_helpers/auth/authentication.service';
import { Role, User } from 'src/app/_helpers/models';
import { ApiService } from 'src/app/_helpers/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser!: User;
  active = 1;
  constructor(private authService: AuthenticationService,
    public router: Router, private apiService: ApiService,) {
    this.authService.currentUser.subscribe(
      res => {
        this.currentUser = res;
      }
    )
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

  stopEvent(e: Event) {
    e.stopPropagation();
  }
}
