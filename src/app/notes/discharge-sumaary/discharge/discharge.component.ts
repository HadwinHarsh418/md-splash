import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';
@Component({
  selector: 'app-discharge',
  templateUrl: './discharge.component.html',
  styleUrls: ['./discharge.component.scss']
})
export class DischargeComponent implements OnInit {
  discharge:FormGroup
  isDisable: boolean = true;
  StartTimer:any
  EndTime1:any
  TotalTimer:any
    
    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.discharge =this.formBuilder.group({
      FirstName:[''],
      MiddleName:[''],
      LastName:[''],
      DateofBirth:[''],
      signinput1:[''],
      Gender:[''],
      StartTime1:[''],
      EndTime1:[''],
      TotalTime1:[''],

      // Sessin Details
      DescHarmingYourself:[''],
      clientnotificatio:[''],
      yes:[''],
      no:[''],
      location_required:[''],
      signinput:[''],
      // selectAuthNumber:[''],
      // txtInsNumber:[''],
      // OtherPresentName:[''],
      // IsSignificantChange:[''],
      // ClientSignificantChange:[''],
      // ClientMoods:[''],
      // Thoughts:[''],
      // Behaviour:[''],
      // SubstanceUse:[''],
      // Danger:[''],
      // Suicide:[''],
      // ddlLongTermGoals1:[''],
      // Progress:[''],
      // Recommendation:[''],
      // Axis1_Amount:[''],
      // Axis1a:[''],
      // Sign_RenderingProvider:[''],
      


    })
  }

 get genForm(){
    return this.discharge.controls;
  }

  Save(){
    markAllDirty(this.discharge);
    if (this.discharge.invalid) {
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
