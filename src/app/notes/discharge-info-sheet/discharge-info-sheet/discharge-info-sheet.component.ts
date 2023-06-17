import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';

@Component({
  selector: 'app-discharge-info-sheet',
  templateUrl: './discharge-info-sheet.component.html',
  styleUrls: ['./discharge-info-sheet.component.scss']
})
export class DischargeInfoSheetComponent implements OnInit {
  generalForm:FormGroup
  isDisable: boolean = true;
  showContent: boolean=true
  
    
    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location,
      private activatedroute:ActivatedRoute) {
        this.activatedroute.params.subscribe((res)=>{
          if(res['id']=='4'){
            this.showContent=false
          }
        })
       }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.generalForm =this.formBuilder.group({
      //identifying info form controls
      First_Name:[''],
      Middle_Initial:[''],
      Last_Name:[''],
      Address:[''],
      City:[''],
      State:[''],
      Zip_code:[''],
      HomePhone:[''],
      CellPhone:[''],
      DischargingProvider:[''],
      DischargeDate :['',Validators.required],
      participation :['',Validators.required],
      D5 :['',Validators.required],
      dischageAgainst :['',Validators.required],
      dischagePlan :['',Validators.required],
      fprmComplete :['',Validators.required],
      datetolast :['',Validators.required],
      
      //session info section form controls
      // DateOfSession:['',Validators.required],
      // datetolast:[''],
      // EndTime:[''],
      // Duration:[''],
      // ProcedureCode1:[''],
      // Rendering_ProviderID:['',Validators.required],
      // Location:[''],
      // divInsuranceType:[''],
      // divAuthNumber:['',Validators.required],
      // PresentingProblemDescription:[''],
      // OtherStressDescription:[''],
      
      //history section started
      // HistoryOfProblem:[''],
      // ProblemOccurrence:[''],
      // ProblemLongLasting:[''],
      // DescHarmingYourself:[{value: '', disabled: this.isDisable}],
      // WhomToHarm:[{value: '', disabled: this.isDisable}],
      // WishingDeadExplanation:[{value: '', disabled: this.isDisable}],
      // WhyHarmOthers:[{value: '', disabled: this.isDisable}],
      // HowLongTherapyCounselling:[{value: '', disabled: this.isDisable}],
      // Desc_EmotionalproblemHospitalized:[{value: '', disabled: this.isDisable}],
      // TreatmentBenifitDetails:[{value: '', disabled: this.isDisable}],
      // EmotionalHospitalizedDetails:[''],
      // MedicationDetails:[''],
      // Desc_SubstanceAbusedProblem:[{value: '', disabled: this.isDisable}],
      // HospitalizedDetails:[''],
      
      // harmingNo:['no'],
      // HarmingUrgeNo:['no'],
      // WishingDeadNo:['no'],
      // HarmOthersNo:['no'],
      // PreviousTherapyCounsellingNo:['no'],
      // HospitalizedForEmotionalNo:['no'],
      // IsTreatmentHelpfulNo:['no'],
      // HospitalizedForAbuseYes:['no'],
      
      //Unknown section form controls
      // RaceEthnicity:[''],
      // MaritalStatus:[''],
      // ReligiousAffiliation:[''],
      // NoOfMarriedYears:[''],
      // MarriageDatesDetails:[''],
      // IsProblemInCurrentRelationship:[{value: '', disabled: this.isDisable}],
      // StressInPreviousMarriage:[{value: '', disabled: this.isDisable}],
      // CommentsRegardingRelationship:[{value: '', disabled: this.isDisable}],
      // PastProblems:[''],
      
      // ProblemInCurrentRelationshipYes:['no'],
      // ISstressInPreviousMarriage_Yes:['no'],
      // ProblemInPreviousRelationshipYes:['no'],
      
      //education section form controls
      // Grade:[''],
      // Degree:[''],
      // MajorFocus:[{value: '', disabled: this.isDisable}],
      // LearnMethod:[''],
      // LikeSchool:[''],
      // SchoolProblemDescription:[''],
      // CurrentEmployer:[''],

      // EnrolledYes:['no'],
      
      //OCCUPATION section form controls
      // ExplainWorkDifficulties:[''],
      // Worktype:[''],
      // YearsOnCurrentJob:[''],
      // MilitaryBranch:[''],
      // ServedInCombat:[''],
      
      //Miltary section form controls
      // TypeOfDischarge:[''],
      // ReasonOfDischarge:[''],
      // MilitaryServiceFrom:[''],
      // MilitaryServiceTo:[''],
    })
  }

 get genForm(){
    return this.generalForm.controls;
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

  back(){
    this.location.back();
  }

  onSelectionChanged(value:any) {
    
    if (value.target.value == 'yes' && value.target.name == 'harmingNo') {
      this.generalForm.controls['DescHarmingYourself'].enable();
      this.isDisable = false;
    } 
    else if(value.target.value == 'yes' && value.target.name == 'HarmingUrgeNo'){
      this.generalForm.controls['WhomToHarm'].enable();
      this.isDisable = false;
    }
    else if(value.target.value == 'yes' && value.target.name == 'WishingDeadNo'){
      this.generalForm.controls['WishingDeadExplanation'].enable();
      this.isDisable = false;
    }
    else if(value.target.value == 'yes' && value.target.name == 'HarmOthersNo'){
      this.generalForm.controls['WhyHarmOthers'].enable();
      this.isDisable = false;
    }
    else if(value.target.value == 'yes' && value.target.name == 'PreviousTherapyCounsellingNo'){
      this.generalForm.controls['HowLongTherapyCounselling'].enable();
      this.isDisable = false;
    }
    else if(value.target.value == 'yes' && value.target.name == 'HospitalizedForEmotionalNo'){
      this.generalForm.controls['Desc_EmotionalproblemHospitalized'].enable();
      this.isDisable = false;
    }
    else if(value.target.value == 'yes' && value.target.name == 'IsTreatmentHelpfulNo'){
      this.generalForm.controls['TreatmentBenifitDetails'].enable();
      this.isDisable = false;
    }
    else if(value.target.value == 'yes' && value.target.name == 'HospitalizedForAbuseYes'){
      this.generalForm.controls['Desc_SubstanceAbusedProblem'].enable();
      this.isDisable = false;
    }
    else if(value.target.value == 'yes' && value.target.name == 'ProblemInCurrentRelationshipYes'){
      this.generalForm.controls['IsProblemInCurrentRelationship'].enable();
      this.isDisable = false;
    }
    else if(value.target.value == 'yes' && value.target.name == 'ISstressInPreviousMarriage_Yes'){
      this.generalForm.controls['StressInPreviousMarriage'].enable();
      this.isDisable = false;
    }
    else if(value.target.value == 'yes' && value.target.name == 'ProblemInPreviousRelationshipYes'){
      this.generalForm.controls['CommentsRegardingRelationship'].enable();
      this.isDisable = false;
    }
    else if(value.target.value == 'yes' && value.target.name == 'EnrolledYes'){
      this.generalForm.controls['MajorFocus'].enable();
      this.isDisable = false;
    }
    else {
      this.generalForm.controls['DescHarmingYourself'].disable();
      this.generalForm.controls['WhomToHarm'].disable();
      this.generalForm.controls['WishingDeadExplanation'].disable();
      this.generalForm.controls['WhyHarmOthers'].disable();
      this.generalForm.controls['HowLongTherapyCounselling'].disable();
      this.generalForm.controls['Desc_EmotionalproblemHospitalized'].disable();
      this.generalForm.controls['TreatmentBenifitDetails'].disable();
      this.generalForm.controls['Desc_SubstanceAbusedProblem'].disable();
      this.generalForm.controls['IsProblemInCurrentRelationship'].disable();
      this.generalForm.controls['StressInPreviousMarriage'].disable();
      this.generalForm.controls['CommentsRegardingRelationship'].disable();
      this.generalForm.controls['MajorFocus'].disable();
      this.isDisable = true;
    }

  }
}
