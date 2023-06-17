import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-guardian-information',
  templateUrl: './guardian-information.component.html',
  styleUrls: ['./guardian-information.component.scss']
})
export class GuardianInformationComponent implements OnInit {

  guardianForm:FormGroup
  isDisable: boolean = true;
  StartTimer:any
  EndTime1:any
  TotalTimer:any
    
    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.guardianForm =this.formBuilder.group({
      FirstName:[''],
      MiddleName:[''],
      LastName:[''],
      DateofBirth:[''],
      Gender:[''],
      Age:[''],
      EndTime1:[''],
      StartTime1:[''],
      TotalTime1:[''],
      Rendering_ProviderID:[''],
      ProcedureCode1:[''],
    })
  }

 get genForm(){
    return this.guardianForm.controls;
  }

  Save(){
    markAllDirty(this.guardianForm);
    if (this.guardianForm.invalid) {
      this.localToast.presentError('Please fill all required fields');
      return;
    }
    else{
      
    }
  }

  back(){
    this.location.back();
  }



}
