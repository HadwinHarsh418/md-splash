import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_helpers/auth/authentication.service';
import { User } from 'src/app/_helpers/models';
import { ApiService } from 'src/app/_helpers/services/api.service';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  public passwordTextType!: boolean;
  public loading = false;
  currentUser: User
  orgRoles: any[] = [];
  baseRoles: any[] = [];

  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private authService: AuthenticationService,
    private _router: Router,
    private localToast: localToastService,
  ) { 
    this.currentUser = this.authService.currentUserValue;
    this.authService.currentUser.subscribe(
      x => {
        if(x) {
          this.currentUser = x;
        }
      }
    )
    if(this.currentUser && this.currentUser.token) {
      this._router.navigate(['/member'])
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group(
      {
        Username: ['', [Validators.required]],
        Password: ['', Validators.compose([Validators.required])],
      }
    )
  }

  get f() {
    return this.loginForm.controls;
  }

  pwdPattern: any = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!#^~%*?&]).{6,}";
  login() {
    markAllDirty(this.loginForm);
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.apiService.login(this.loginForm.value).subscribe(
      res => {
            let data = res.Data;
            // data.token = data.accessToken;
            this.authService.setLogin(data);
            this.localToast.presentSuccess(res.Message)
            this._router.navigate(['/member'])
        this.loading = false;
       }, error => {
      this.loading = false;
        this.localToast.handleHttpErrorResponse(error);
      }
    )
  }


  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

 
}
