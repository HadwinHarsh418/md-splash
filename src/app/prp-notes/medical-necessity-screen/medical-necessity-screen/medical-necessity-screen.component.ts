import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-medical-necessity-screen',
  templateUrl: './medical-necessity-screen.component.html',
  styleUrls: ['./medical-necessity-screen.component.scss']
})
export class MedicalNecessityScreenComponent implements OnInit {
  medicalNecessityForm:FormGroup
  isDisable: boolean = true;
  StartTimer:any
  EndTime1:any
  TotalTimer:any
    
    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.medicalNecessityForm =this.formBuilder.group({
      FirstName:[''],
      MiddleName:[''],
      LastName:[''],
      DateofBirth:[''],
      Age:[''],
      Gender:[''],
      StartTime1:[''],
      EndTime1:[''],
      TotalTime1:[''],
      DOS:['',Validators.required],

      // Sessin Details

      Rendering_ProviderID:['',Validators.required],
      ProcedureCode1:[''],
      location_required:[''],
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
      


    })
  }

 get genForm(){
    return this.medicalNecessityForm.controls;
  }

  Save(){
    markAllDirty(this.medicalNecessityForm);
    if (this.medicalNecessityForm.invalid) {
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
