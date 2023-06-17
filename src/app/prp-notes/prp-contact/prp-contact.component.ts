import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';

@Component({
  selector: 'app-prp-contact',
  templateUrl: './prp-contact.component.html',
  styleUrls: ['./prp-contact.component.scss']
})
export class PrpContactComponent implements OnInit {
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
      DOS:['',Validators.required],
      Age:[''],
      Gender:[''],
      StartTime1:[''],
      EndTime1:[''],
      TotalTime1:[''],

      // Sessin Details

      Rendering_ProviderID:['',Validators.required],
      ProcedureCode1:[''],
      location_required:['',Validators.required],
      hdnInsuranceType:[''],
      selectAuthNumber:['',Validators.required],
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
      presesntAtSession:[''],
      medicalComplaint:[''],
      shortTermIRP:[''],
      GoalCongurent:[''],
      GoalSpecificCOncern:[''],
      longTerGoal:[''],
      ShortTermGoal:[''],
      progresstowardgoals:[''],
      nextSchedule:[''],
      Response:[''],
      Appearance:[''],
      Attention:[''],
      motorActivity:[''],
      mood:[''],
      speech:[''],
      Sign:[''],
      


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
