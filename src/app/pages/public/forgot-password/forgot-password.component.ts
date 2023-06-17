import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_helpers/auth/authentication.service';
import { User } from 'src/app/_helpers/models';
import { ApiService } from 'src/app/_helpers/services/api.service';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  isloading!: boolean;
  currentUser!: User
  checkingForgot!:boolean;
  forgotUser:any;
  message:any;
  isLinkSent = false;

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
  }

  ngOnInit(): void {
    this.initForm();
    this.isLinkSent = false;
  }

  initForm() {
    this.forgotPasswordForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]], 
      }
    )
  }

  get f() {
    return this.forgotPasswordForm.controls;
  }

  validateEmail() {
    markAllDirty(this.forgotPasswordForm);
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    this.checkingForgot = true;
    let data = { 
      id:  this.forgotPasswordForm.value.email
    };
    this.apiService.validateEmail(data).subscribe(
      res => {
        if(res) {
          this.forgotUser = res;
          this.sendForgotEmail();
        }
        //this.checkingForgot = false;
      }, error => {
        this.checkingForgot = false;
        this.localToast.handleHttpErrorResponse(error);
      }
    )
  }

  sendForgotEmail() {
    if(!this.forgotUser || !this.forgotUser.id) return; 
    this.checkingForgot = true;
    let data = { id: this.forgotUser.id, text: this.forgotUser.email, appType:environment.appType}
    this.apiService.sendLink(data).subscribe(
      res => {
        if(res) {
          this.message= 'We have sent a link to the email address entered, Please click on the link to reset your password';
          this.isLinkSent = true;
        }
        this.checkingForgot = false;
      }, error => {
        this.checkingForgot = false;
        this.isLinkSent = false;
        this.localToast.handleHttpErrorResponse(error);
      }
    )
  }



}
