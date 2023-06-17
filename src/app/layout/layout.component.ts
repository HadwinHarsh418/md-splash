import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd } from '@angular/router';
import { AuthenticationService } from '../_helpers/auth/authentication.service';
import { User } from '../_helpers/models';
import { menuItem } from '../_helpers/models/menu';
import { StaticService } from '../_helpers/services/staticdata.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  currentUser:User
  visibility:boolean=true;
  isLoading: boolean = false;
  constructor(
    public router: Router,
    public _authService: AuthenticationService,
    public staticData: StaticService,
  ) {
    // Spinner for lazyload modules
    router.events.forEach((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;

      }
    });
    this.currentUser = this._authService.currentUserValue;
    this._authService.currentUser.subscribe(
      x => {
        if(x) {
          this.currentUser = x;
        }
      }
    ) 
  }

  ngOnInit(): void {
  }

}
