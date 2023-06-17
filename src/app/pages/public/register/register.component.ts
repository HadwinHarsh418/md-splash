import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { markAllDirty } from 'src/app/_helpers/utils';
import { CustomValidators } from 'src/app/_helpers/validators/must-match.validator';
import { Patterns } from 'src/app/_helpers/validators/pattern';
import { MustMatchValidator } from './conformps';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm!: FormGroup;
  VerifySubmitted !:boolean
  public passwordTextType!: boolean;
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.RegistersetForm()
  }

  RegistersetForm() {
    this.RegisterForm = this.formBuilder.group(
      {
        user_nice_name: ['', [Validators.required]],
        Last_name: ['', [Validators.required]],
        user_email: ['', [Validators.required,Validators.pattern(Patterns.email)]],
        // user_pass: ['', Validators.compose([Validators.required,Validators.pattern(Patterns.password)])],
        user_pass: [ '', Validators.compose([Validators.required,
          CustomValidators.patternValidator(/\d/, { hasNumber: true }),
          CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
          CustomValidators.patternValidator(/[@$#^!%*&!%*(?)_=+-]/, { hasSpecialCharacters: true }),
          Validators.minLength(8),

        ])
       ],        
        confirm_password: ['',Validators.compose([Validators.required,Validators.pattern(Patterns.password)])],     
      },);
  }

  get f() {
    return this.RegisterForm.controls;
  }

  // Register(){
  // }


  Register() {
    this.VerifySubmitted=true
    markAllDirty(this.RegisterForm);
    if (this.RegisterForm.invalid) {
      return;
    }
    // this.isloading = true;
    // this.apiService.login(this.loginForm.value).subscribe(
    //   res => {
    //     if (res.response && res.response.token) {
    //         let data = res.response;
    //         this.authService.setLogin(data);
    //         this._router.navigate(['/member'])  
    //     }
    //     this.isloading = false;
    //   }, error => {
    //     this.isloading = false;
    //     this.localToast.handleHttpErrorResponse(error);
    //   }
    // )
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }
}
