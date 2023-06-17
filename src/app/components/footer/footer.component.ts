import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_helpers/auth/authentication.service';
import { Role, User } from 'src/app/_helpers/models';
import { ApiService } from 'src/app/_helpers/services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentUser!: User;
  permissions =  { 
    footer: []
  }
  constructor(
    public authService:  AuthenticationService,
    public apiService: ApiService,
    private router: Router,
  ) { 
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

}
