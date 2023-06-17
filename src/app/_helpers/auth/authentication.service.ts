import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, Role } from '../models';
import { EncryptionService } from '../encryption/encryption.service';
import { Router } from '@angular/router';


const TOKEN_KEY = 'mdsplashUserAuth';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  //public
  public currentUser!: Observable<User>;
  public loginModal = new  BehaviorSubject<string | null>(null);

  //private
  private currentUserSubject!: BehaviorSubject<User>;
  public profilePicUpdate = new BehaviorSubject<boolean>(false);

  loggedOut!: boolean;
  tempToken: string = '';
  subsAll:any=[];
  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   * @param {UserBalanceService} _userBalanceService
   */
  constructor(
    private encryptionService: EncryptionService,
    private _router: Router,
  ) {
    this.checkToken();
  }

  checkToken() {
    let locToken = this.encryptionService.decode(localStorage.getItem(TOKEN_KEY));
    if (locToken) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(locToken));
      this.currentUser = this.currentUserSubject.asObservable();
    } else {
      this.currentUserSubject = new BehaviorSubject<User>({});
      this.currentUser = this.currentUserSubject.asObservable();
    }
  }

  updateTokenValue(updatedUser: any) {
    if (updatedUser && updatedUser.token) {
      localStorage.setItem(TOKEN_KEY, this.encryptionService.encode(JSON.stringify(updatedUser)));
      this.currentUserSubject.next(updatedUser);
    }
  }

  // getter: currentUserValue
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }  
  /**
   * User logout
   *
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(TOKEN_KEY);
    // notify
    // this.currentUserSubject.unsubscribe();
    // this.currentUserSubject.next(null);
    this.currentUserSubject.next({});
    // set logout flag
    this.loggedOut = true;
    this._router.navigate(['']);

  }

  setLogin(user:any) {
    if (user && user.Token) {
      localStorage.setItem(TOKEN_KEY, this.encryptionService.encode(JSON.stringify(user)));
      this.currentUserSubject.next(user);
      this.loggedOut = false;
      
    }
  }

  SetSocialLogin(socialuser:any, user:any) {
    if (user && user.token) {
      user.social_user = socialuser;
      localStorage.setItem(TOKEN_KEY, this.encryptionService.encode(JSON.stringify(user)));
      localStorage.setItem(TOKEN_KEY, this.encryptionService.encode(JSON.stringify(user)));
      this.currentUserSubject.next(user);
      this.loggedOut = false;
    }
  }

  
  errorToaster(data: any, toToast = true) {
    if (data.error && data.msg) {
      if (data.auth == false) {
        if (!this.loggedOut) {
          // show toaster for session out;
          if (toToast) {
            // this.toastr.presentToast('Your session is expired, please login again.', 'danger');
            this.logout();
          }
        }
        this.loggedOut = true;
      } else {
        // show default retuned error;
        if (toToast) {
          
          // this.toastr.presentToast(data.msg, 'danger');
        }
      }
    }
  }

  markFormAsDirty(from:any) {
    for (const key in from.controls) {
      if (Object.prototype.hasOwnProperty.call(from.controls, key)) {
        from.controls[key].markAsDirty();
      }
    }
  }
}
