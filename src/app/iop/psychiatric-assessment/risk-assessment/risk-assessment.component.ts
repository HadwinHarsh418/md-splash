import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.component.html',
  styleUrls: ['./risk-assessment.component.scss']
})
export class RiskAssessmentComponent implements OnInit {
  imagesrc = '/assets/images/smail-icon.png';
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
      StartTime1:[''],
      DOS:['',Validators.required],
      EndTime1:[''],
      TotalTime1:[''],

      // Sessin Details

      Rendering_ProviderID:[''],
      ProcedureCode1:[''],
      location_required:[''],
      hdnInsuranceType:[''],
      selectAuthNumber:[''],
      txtInsNumber:[''],
      OtherPresentName:[''],
      IsSignificantChange:[''],
      ClientSignificantChange:[''],
      ClientMoods:[''],
      Thoughts:[''],
      Behaviour:[''],
      SubstanceUse:[''],
      Danger:[''],
      Suicide:[''],
      ddlLongTermGoals1:[''],
      Progress:[''],
      Recommendation:[''],
      Axis1_Amount:[''],
      Axis1a:[''],
      Sign_RenderingProvider:[''],
      


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
