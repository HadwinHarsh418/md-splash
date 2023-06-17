import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.scss']
})
export class SafetyComponent implements OnInit {
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
      PCP_Note:[''],
      Gender:[''],
      StartTime1:[''],
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
      CounslerName:[''],
      input1:[''],
      


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
