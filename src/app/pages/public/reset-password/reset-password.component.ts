import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/_helpers/validators/must-match.validator';
import { Patterns } from 'src/app/_helpers/validators/pattern';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  ResetForm!: FormGroup;
  public passwordTextType!: boolean;
  public passwordTextType1!: boolean;
  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.setrestpassword()
  }

setrestpassword(){
  this.ResetForm =this.formBuilder.group({
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
  return this.ResetForm.controls;
}

Rest(){

}

}
