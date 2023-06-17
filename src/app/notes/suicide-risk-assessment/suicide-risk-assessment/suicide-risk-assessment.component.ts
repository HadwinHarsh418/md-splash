import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-suicide-risk-assessment',
  templateUrl: './suicide-risk-assessment.component.html',
  styleUrls: ['./suicide-risk-assessment.component.scss']
})
export class SuicideRiskAssessmentComponent implements OnInit {

  suicideRiskForm!:FormGroup
  isDisable: boolean = true;
  StartTimer:any
  EndTime1:any
  TotalTimer:any
  txt: string;
    
    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
    this.totalValue();
  }

  init(){
    this.suicideRiskForm =this.formBuilder.group({
      //1st row
      FirstName:[''],
      MiddleName:[''],
      LastName:[''],
      StrSessionDate:['',Validators.required],
      ProviderId:['',Validators.required],
      InformationGather:[''],
      DateofBirth:[''],
      Age:[''],
      Gender:[''],

      //2nd row
      DesThoughtOfSuicide:[''],
      DesThoughtOfInterably:[''],
      DesFeelingOfHopeless:[''],
      DesFeelingOFHelpless:[''],
      DesFeelingOfBurdenOnOther:[''],
      DesFeelingOfTrapped:[''],
      DesPsycholgicalPain:[''],
      DesTriedCopingSkill:[''],
      DesSuicideDesireScore:[''],

      //3rd row
      CapAttemptedSuicide:[''],
      CapExposedDeathOfOther:[''],
      CapHurtToHimself:[''],
      CapHistoryOfViolence:[''],
      CapIntoxicated:[''],
      CapTakingSubstance:[''],
      CapHistoryOfAoDAbuse:[''],
      CapExpMentalHealthSymptom:[''],
      CapOutOfTouchWithReality:[''],
      CapIncreasedAgitation:[''],
      CapExpDramaticMoodSwing:[''],
      CapExpIncreasedAnxiety:[''],
      CapExpProblemsSleeping:[''],
      CapSuicideCapabilityScore:[''],

      //4th row
      IntAttemptingSuicide:[''],
      IntPlanningSuicide:[''],
      IntPreparingForDeath:[''],
      IntExpressIntentToDie:[''],
      IntSuicideIntentScore:[''],

      //5th row
      ProImmediateSupport:[''],
      ProSocialSupport:[''],
      ProPlanForFuture:[''],
      ProAmbevalenceForDie:[''],
      ProSenseOfPurpose:[''],
      ProBelifeSystem:[''],
      ProTherapistSession:[''],
      ProVerbalize:[''],
      ProIdentityTriggers:[''],
      ProFactorScore:[''],

      //6th row
      lblDesire:[''],
      lblCapability:[''],
      lblIntent:[''],
      lblProtective:[''],
      lblSuicideRiskScore:[''],
    })
  }

  CheckedValueSucidalDesire(data){
    let b = ['DesThoughtOfSuicide', 'DesThoughtOfInterably', 'DesFeelingOfHopeless', 'DesFeelingOFHelpless', 'DesFeelingOfBurdenOnOther', 'DesFeelingOfTrapped', 'DesPsycholgicalPain', 'DesTriedCopingSkill']
    let calculateData = 0; 
    b.forEach(item => calculateData += parseFloat(this.suicideRiskForm.value[item] || 0));
      if(calculateData > 25){
        this.localToast.presentError('Cannot')
        this.suicideRiskForm.controls['DesSuicideDesireScore'].setValue('')
      }
      else{
        this.suicideRiskForm.controls['DesSuicideDesireScore'].setValue(calculateData)
      }
      this.suicideRiskForm.controls['lblDesire'].setValue(this.suicideRiskForm.value.DesSuicideDesireScore)
      this.totalValue()
    }
    
    CheckedValueSucidalCapability(data){
      let b = ['CapAttemptedSuicide', 'CapExposedDeathOfOther', 'CapHurtToHimself', 'CapHistoryOfViolence', 'CapIntoxicated', 'CapTakingSubstance', 'CapHistoryOfAoDAbuse', 'CapExpMentalHealthSymptom' , 'CapOutOfTouchWithReality' , 'CapIncreasedAgitation' , 'CapExpDramaticMoodSwing' , 'CapExpIncreasedAnxiety' , 'CapExpProblemsSleeping']
      let calculateData = 0; 
      b.forEach(item => calculateData += parseFloat(this.suicideRiskForm.value[item] || 0));
      if(calculateData > 40){
        this.localToast.presentError('Cannot')
        this.suicideRiskForm.controls['CapSuicideCapabilityScore'].setValue('')
      }
      else{
        this.suicideRiskForm.controls['CapSuicideCapabilityScore'].setValue(calculateData)
      }
      this.suicideRiskForm.controls['lblCapability'].setValue(this.suicideRiskForm.value.CapSuicideCapabilityScore)
      this.totalValue()
    }
    
    CheckedValueSucidalIntent(data){
      let b = ['IntAttemptingSuicide', 'IntPlanningSuicide', 'IntPreparingForDeath', 'IntExpressIntentToDie']
      let calculateData = 0; 
      b.forEach(item => calculateData += parseFloat(this.suicideRiskForm.value[item] || 0));
      if(calculateData > 40){
        this.localToast.presentError('Cannot')
        this.suicideRiskForm.controls['IntSuicideIntentScore'].setValue('')
      }
      else{
        this.suicideRiskForm.controls['IntSuicideIntentScore'].setValue(calculateData)
      }
      this.suicideRiskForm.controls['lblIntent'].setValue(this.suicideRiskForm.value.IntSuicideIntentScore)
      this.totalValue()
  }

    CheckedValueSucidalProtective(data){
      let b = ['ProImmediateSupport', 'ProSocialSupport', 'ProPlanForFuture', 'ProAmbevalenceForDie' , 'ProSenseOfPurpose' , 'ProBelifeSystem' , 'ProTherapistSession' , 'ProVerbalize' , 'ProIdentityTriggers']
      let calculateData = 0; 
      b.forEach(item => calculateData += parseFloat(this.suicideRiskForm.value[item] || 0));
      if(calculateData > 46){
        this.localToast.presentError('Cannot')
        this.suicideRiskForm.controls['ProFactorScore'].setValue('')
      }
      else{
        this.suicideRiskForm.controls['ProFactorScore'].setValue(calculateData)
      }
      this.suicideRiskForm.controls['lblProtective'].setValue(this.suicideRiskForm.value.ProFactorScore)
      this.totalValue()
  }

  totalValue(){

    let b = ['lblDesire', 'lblCapability', 'lblIntent']
      let calculateData = 0; 
      b.forEach(item => calculateData += parseFloat(this.suicideRiskForm.value[item]));
      let total = calculateData - this.suicideRiskForm.value.lblProtective
      this.suicideRiskForm.controls['lblSuicideRiskScore'].setValue(total)
      if(total <= 29){
        this.txt = 'Low Risk'

      }
      else if(total >30 && total <50){
        this.txt = 'Moderate Risk';
      }
      else if(total >60){
        this.txt = 'High Risk';
      }
      else{
        this.txt = '';
      }
  }

 get genForm(){
    return this.suicideRiskForm.controls;
  }

  Save(){
    markAllDirty(this.suicideRiskForm);
    if (this.suicideRiskForm.invalid) {
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
