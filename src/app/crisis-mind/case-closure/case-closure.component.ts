import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-case-closure',
  templateUrl: './case-closure.component.html',
  styleUrls: ['./case-closure.component.scss']
})
export class CaseClosureComponent implements OnInit {

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
      DateofBirth:['',Validators.required],
      Age:[''],
      Gender:[''],
      StartTime1:[''],
      EndTime1:[''],
      DOS:['',Validators.required],
      TotalTime1:[''],

      // Sessin Details

      Rendering_ProviderID:[''],
      date:['',Validators.required],
      time:['',Validators.required],
      personCalling:['',Validators.required],
      PhoneNo:['',Validators.required],
      ParticipantName:['',Validators.required],
      //ProcedureCode1:[''],
      //location_required:[''],
      //hdnInsuranceType:[''],
     // selectAuthNumber:[''],
     // txtInsNumber:[''],
      //OtherPresentName:[''],
      //IsSignificantChange:[''],
     // ClientSignificantChange:[''],
      //ClientMoods:[''],
      //Thoughts:[''],
      //Behaviour:[''],
     // SubstanceUse:[''],
     // Danger:[''],
     // Suicide:[''],
      //ddlLongTermGoals1:[''],
     // Progress:[''],
     // Recommendation:[''],
     // Axis1_Amount:[''],
     // Axis1a:[''],
      //Sign_RenderingProvider:[''],
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
