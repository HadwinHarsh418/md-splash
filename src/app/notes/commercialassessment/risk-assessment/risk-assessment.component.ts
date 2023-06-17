import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { Location } from '@angular/common';
import { markAllDirty } from 'src/app/_helpers/utils';

@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.component.html',
  styleUrls: ['./risk-assessment.component.scss']
})
export class RiskAssessmentComponent implements OnInit {
  generalForm:FormGroup
  refralForm:FormGroup;
  isDisable: boolean = true;

  constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }

  ngOnInit(): void {
    this.init();
    this.init2();
  }
  init(){
    this.generalForm =this.formBuilder.group({
      //identifying info form controls
      First_Name:[''],
      Middle_Initial:[''],
      Last_Name:[''],

    })
  }
  init2(){
    this.refralForm =this.formBuilder.group({
      //identifying info form controls
      InPatientAlcoholandOtherDrugsServices:[''],
      PsychiatricServicesSpecifyphysicianname:[''],
      CaseManagement:[''],
      LegalServices:[''],
      CaseManagementChild:[''],
      ReturnToReferralSource:[''],
      CummunityHousingProgram:[''],
      ReferToPrimaryPhysician:[''],
      DomesticViolencesServices:[''],
      InpatientMental:[''],
      CrisisInterventionServices:[''],
      MedicalServices:[''],
      services:[''],
      inputfield1:[''],
      supprthelpgroup:[''],
      inputfield2:[''],
      MedicationManagement:[''],
      inputfield3:[''],
      inputfield4:[''],
      inputfield5:[''],
      inputfield6:[''],
      inputfield7:[''],
      inputfield8:[''],
      // ----------Homicidal----
      Homicidal1:[''],
      Homicidal2:[''],
      Homicidal4:[''],
      Homicidal3:[''],
      Homicidal5:[''],
      Homicidal6:[''],
      Homicidal7:[''],
      Homicidal8:[''],
    })
  }


 get genForm(){
    return this.generalForm.controls;
  }
  get refForm(){
    return this.refralForm.controls;
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
  Save2(){
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
