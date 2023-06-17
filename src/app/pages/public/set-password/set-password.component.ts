import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_helpers/auth/authentication.service';
import { ApiService } from 'src/app/_helpers/services/api.service';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { CustomValidators, matchOtherValidator } from 'src/app/_helpers/validators/must-match.validator';


@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {
  resetSuccess:boolean = false;
  setPasswordForm!:FormGroup;
  isloading!:boolean;
  token:any;
  public passwordTextType!: boolean;
  public confirmPasswordTextType!: boolean;
  passwordToken!:string;
  verifyLink!:boolean;

  constructor(private formBuilder:FormBuilder,
    private apiService:ApiService,
    private authService:AuthenticationService,
    private _router:Router,
    private localToast:localToastService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['token']) {
          this.passwordToken = params['token'];
        }
      }
    )
    this.activatedRoute.queryParams.subscribe(
      params => {
        if(params['token']) {
           this.passwordToken = params['token']
        } 
      }
    )
  }

  ngOnInit(): void {
    if(!this.passwordToken) {
      this._router.navigateByUrl('/');
    }
    this.getResetPasswordToken();
    this.initForm();
  }

initForm() {
    this.setPasswordForm = this.formBuilder.group(
      {
        password: ['',Validators.compose([
          Validators.required,
          CustomValidators.patternValidator(/\d/, { hasNumber: true }),
          CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
          CustomValidators.patternValidator(/[@$#^!%*&!%*(?)_=+-]/, { hasSpecialCharacters: true }),
          Validators.minLength(6),
        ])],
        confirm_password: ['',Validators.compose([Validators.required, matchOtherValidator('password')])],
     
      }
    )
  }

  get f() {
    return this.setPasswordForm.controls;
  }

  // pwdPattern: any = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!#^~%*?&]).{6,}";



  getResetPasswordToken() {
    this.verifyLink = true;
    let data=  { id: this.passwordToken};
    this.apiService.getResetPasswordToken(data).subscribe(
      res => {
        if(res && res.id) {
          this.token = res.id;
        } else {
          this.token = null;
        }
        this.verifyLink = false;
      }, error => {
        this.verifyLink = false;
        this.localToast.handleHttpErrorResponse(error);
      }
    )
  }

  setPasswordNow() {
    markAllDirty(this.setPasswordForm);
    if (this.setPasswordForm.invalid) {
      return;
    }
    let data = {
      id: this.passwordToken,
      text: this.setPasswordForm.value.password,
      token: this.token
    }
    this.isloading = true;
    this.apiService.resetPassword(data).subscribe(
      res => {
        if(res) {
          
          this.localToast.presentSuccess('Password reset successfully! Login now.', 3000);
          this._router.navigateByUrl('/');
        }
        else{
             this.localToast.presentError('Link has been Expired.', 3000);
        }  
        this.isloading = false;
      }, error => {
        this.isloading = false;
        this.localToast.handleHttpErrorResponse(error);
      }
    )
  }

}
