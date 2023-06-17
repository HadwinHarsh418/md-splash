import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { Location } from '@angular/common';
import { markAllDirty } from 'src/app/_helpers/utils';

@Component({
  selector: 'app-referrals-summary',
  templateUrl: './referrals-summary.component.html',
  styleUrls: ['./referrals-summary.component.scss']
})
export class ReferralsSummaryComponent implements OnInit {
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
      inputfield3:['']
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

  // onSelectionChanged(value:any) {
    
  //   if (value.target.value == 'yes' && value.target.name == 'harmingNo') {
  //     this.generalForm.controls['DescHarmingYourself'].enable();
  //     this.isDisable = false;
  //   } 
  //   else if(value.target.value == 'yes' && value.target.name == 'HarmingUrgeNo'){
  //     this.generalForm.controls['WhomToHarm'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'WishingDeadNo'){
  //     this.generalForm.controls['WishingDeadExplanation'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'HarmOthersNo'){
  //     this.generalForm.controls['WhyHarmOthers'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'PreviousTherapyCounsellingNo'){
  //     this.generalForm.controls['HowLongTherapyCounselling'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'HospitalizedForEmotionalNo'){
  //     this.generalForm.controls['Desc_EmotionalproblemHospitalized'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'IsTreatmentHelpfulNo'){
  //     this.generalForm.controls['TreatmentBenifitDetails'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'HospitalizedForAbuseYes'){
  //     this.generalForm.controls['Desc_SubstanceAbusedProblem'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'ProblemInCurrentRelationshipYes'){
  //     this.generalForm.controls['IsProblemInCurrentRelationship'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'ISstressInPreviousMarriage_Yes'){
  //     this.generalForm.controls['StressInPreviousMarriage'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'ProblemInPreviousRelationshipYes'){
  //     this.generalForm.controls['CommentsRegardingRelationship'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'EnrolledYes'){
  //     this.generalForm.controls['MajorFocus'].enable();
  //     this.isDisable = false;
  //   }
  //   else {
  //     this.generalForm.controls['DescHarmingYourself'].disable();
  //     this.generalForm.controls['WhomToHarm'].disable();
  //     this.generalForm.controls['WishingDeadExplanation'].disable();
  //     this.generalForm.controls['WhyHarmOthers'].disable();
  //     this.generalForm.controls['HowLongTherapyCounselling'].disable();
  //     this.generalForm.controls['Desc_EmotionalproblemHospitalized'].disable();
  //     this.generalForm.controls['TreatmentBenifitDetails'].disable();
  //     this.generalForm.controls['Desc_SubstanceAbusedProblem'].disable();
  //     this.generalForm.controls['IsProblemInCurrentRelationship'].disable();
  //     this.generalForm.controls['StressInPreviousMarriage'].disable();
  //     this.generalForm.controls['CommentsRegardingRelationship'].disable();
  //     this.generalForm.controls['MajorFocus'].disable();
  //     this.isDisable = true;
  //   }

  // }

  

}
