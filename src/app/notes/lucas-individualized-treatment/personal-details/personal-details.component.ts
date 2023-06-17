import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from "@angular/common";

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  pregressNotes:FormGroup
  isDisable: boolean = true;
  StartTimer:any
  EndTime1:any
  TotalTimer:any

    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.pregressNotes =this.formBuilder.group({
      FirstName:[''],
      MiddleName:[''],
      LastName:[''],
      DateofBirth:[''],
      Age:[''],
      Gender:[''],
      DateofSession:['',Validators.required],
      StartTime1:[''],
      EndTime1:[''],
      TotalTime1:[''],

      // Sessin Details

      Rendering_ProviderID:['',Validators.required],
      ProcedureCode1:['',Validators.required],
      location_required:['',Validators.required],
      Assessor_Name:[''],
      DSM_Diagnosis:[''],
      Therapist_Name:[''],
      QMHS:[''],
      DateofDx:[''],
      AdditionalProvider:[''],
      UpDateofDx:[''],
      XDA:[''],
      DA_Update:[''],
      Psychiatric_Evaluation:[''],
      Referral_Document:[''],
      DA_addendum:[''],



    })
  }

 get genForm(){
    return this.pregressNotes.controls;
  }

  Save(){
    markAllDirty(this.pregressNotes);
    if (this.pregressNotes.invalid) {
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
