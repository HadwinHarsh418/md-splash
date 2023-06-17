import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { Location } from '@angular/common';
import { markAllDirty } from 'src/app/_helpers/utils';

@Component({
  selector: 'app-progress-summary',
  templateUrl: './progress-summary.component.html',
  styleUrls: ['./progress-summary.component.scss']
})
export class ProgressSummaryComponent implements OnInit {
  progressForm:FormGroup
  isDisable: boolean = true;

  constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }

  ngOnInit(): void {
    this.init();
  }
  init(){
    this.progressForm =this.formBuilder.group({
      //identifying info form controls
      First_Name:[''],
      Middle_Initial:[''],
      Last_Name:[''],
      harmingNo:[''],
      FamilyTherapy:[''],
      GroupTherapy:[''],
      MedicationManagement:[''],
      PsychiatricServices:[''],      
      PsychiatricRehabilitationServices:[''],
      SubstanceAbuseTreatment:[''],
      CaseManagement:[''],
      longtermgoal1:['',Validators.required],
      longtermgoal1progress:['',Validators.required],
      longtermgoal2:['',Validators.required],
      longtermgoal2progress:['',Validators.required],
      longtermgoal3:['',Validators.required],
      longtermgoal3progress:['',Validators.required],
      longtermgoal4:['',Validators.required],
      longtermgoal4progress:['',Validators.required]

    })
  }

 get genForm(){
    return this.progressForm.controls;
  }

  Save(){
    markAllDirty(this.progressForm);
    if (this.progressForm.invalid) {
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
  //     this.progressForm.controls['DescHarmingYourself'].enable();
  //     this.isDisable = false;
  //   } 
  //   else if(value.target.value == 'yes' && value.target.name == 'HarmingUrgeNo'){
  //     this.progressForm.controls['WhomToHarm'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'WishingDeadNo'){
  //     this.progressForm.controls['WishingDeadExplanation'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'HarmOthersNo'){
  //     this.progressForm.controls['WhyHarmOthers'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'PreviousTherapyCounsellingNo'){
  //     this.progressForm.controls['HowLongTherapyCounselling'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'HospitalizedForEmotionalNo'){
  //     this.progressForm.controls['Desc_EmotionalproblemHospitalized'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'IsTreatmentHelpfulNo'){
  //     this.progressForm.controls['TreatmentBenifitDetails'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'HospitalizedForAbuseYes'){
  //     this.progressForm.controls['Desc_SubstanceAbusedProblem'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'ProblemInCurrentRelationshipYes'){
  //     this.progressForm.controls['IsProblemInCurrentRelationship'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'ISstressInPreviousMarriage_Yes'){
  //     this.progressForm.controls['StressInPreviousMarriage'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'ProblemInPreviousRelationshipYes'){
  //     this.progressForm.controls['CommentsRegardingRelationship'].enable();
  //     this.isDisable = false;
  //   }
  //   else if(value.target.value == 'yes' && value.target.name == 'EnrolledYes'){
  //     this.progressForm.controls['MajorFocus'].enable();
  //     this.isDisable = false;
  //   }
  //   else {
  //     this.progressForm.controls['DescHarmingYourself'].disable();
  //     this.progressForm.controls['WhomToHarm'].disable();
  //     this.progressForm.controls['WishingDeadExplanation'].disable();
  //     this.progressForm.controls['WhyHarmOthers'].disable();
  //     this.progressForm.controls['HowLongTherapyCounselling'].disable();
  //     this.progressForm.controls['Desc_EmotionalproblemHospitalized'].disable();
  //     this.progressForm.controls['TreatmentBenifitDetails'].disable();
  //     this.progressForm.controls['Desc_SubstanceAbusedProblem'].disable();
  //     this.progressForm.controls['IsProblemInCurrentRelationship'].disable();
  //     this.progressForm.controls['StressInPreviousMarriage'].disable();
  //     this.progressForm.controls['CommentsRegardingRelationship'].disable();
  //     this.progressForm.controls['MajorFocus'].disable();
  //     this.isDisable = true;
  //   }

  // }

}
