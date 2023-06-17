import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  generalForm:FormGroup
  isDisable: boolean = true;
  StartTimer:any
  EndTime1:any
  TotalTimer:any
    
    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.generalForm =this.formBuilder.group({
      FirstName:[''],
      MiddleName:[''],
      LastName:[''],
      DateofBirth:[''],
      Gender:[''],
      Age:[''],
      EndTime1:[''],
      StartTime1:[''],
      TotalTime1:[''],
      AdmissionDate:['',Validators.required],
      DischargeDate:['',Validators.required],
      Rendering_ProviderID:['',Validators.required],
      ProcedureCode1:['',Validators.required],
      DOS:['',Validators.required],
      selectAuthNumber:['',Validators.required]
    })
  }

 get genForm(){
    return this.generalForm.controls;
  }

  Save(){
    markAllDirty(this.generalForm);
    if (this.generalForm.invalid) {
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
