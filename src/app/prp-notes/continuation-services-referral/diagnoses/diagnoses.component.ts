import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-diagnoses',
  templateUrl: './diagnoses.component.html',
  styleUrls: ['./diagnoses.component.scss']
})
export class DiagnosesComponent implements OnInit {
  diagnosisForm:FormGroup
  isDisable: boolean = true;
  StartTimer:any
  EndTime1:any
  TotalTimer:any
    
    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.diagnosisForm =this.formBuilder.group({
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
    return this.diagnosisForm.controls;
  }

  Save(){
    markAllDirty(this.diagnosisForm);
    if (this.diagnosisForm.invalid) {
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
