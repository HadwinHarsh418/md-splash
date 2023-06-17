import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from "@angular/common";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  pregressNotes:FormGroup
  isDisable: boolean = true;
    
    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.pregressNotes =this.formBuilder.group({
      IsExperiencingSuicidalThought:[''],
      IsPlanToHarmThemselves:[''],
      IsExperiencingThoughtHomicide:[''],
      IsPlanToHarmAnotherPerson:[''],
      IsAngryAggressiveThreatening:[''],
      IsAnyHistoryViolentBehaviour:[''],
      IsHavingAccessToWeapons:[''],
      IsPsychosis:[''],
      IsMania:[''],
      IsAnxiety:[''],
      IsSleepProblem:[''],
      IsSomaticSymptoms:[''],
      IsRepetitiveThoughtBehaviour:[''],
      IsWitnessViolence:[''],
      Suspected:[''],
      Reported:[''],
      NicotineLastUse:[''],
      Alcohol:[''],
      AlcoholLastUse:[''],
      Cannabis:[''],
      CannabisLastUse:[''],
      SyntheticCannabinoids:[''],
      SyntheticCannabinoidsLastUse:[''],
      Amphetamines:[''],
      AmphetaminesLastUse:[''],
      Hallucinogens:[''],
      HallucinogensLastUse:[''],
      Cocaine:[''],
      CocaineLastUse:[''],
      Inhalants:[''],
      InhalantsLastUse:[''],
      Heroin:[''],
      HeroinLastUse:[''],
      PrescriptionOpioids:[''],
      PrescriptionOpioidsLastUse:[''],
      MDMA:[''],
      MDMALastUse:[''],
      Other1:[''],
      Other1LastUse:[''],
      IsPriorBehaviourHealthTreatment:[''],
      IfPriorBehaviourHealthTreatmentIsYes:[''],
      PriorBehaviourDates:[''],
      NameLocationOfProvider:[''],
      ReportedDiagnosisPrior:[''],
      CurrentlyTakingAboveMedsPrior:[''],
      IsBehaviouralHealthTreatment:[''],
      PrescribedMedicationsCurrent:[''],
      BehaviouralHealthTreatmentDates:[''],
      NameLocation:[''],
      ReportedDiagnosisCurrentBehavioral:[''],
      PrescribedMedicationsPrior:[''],
      CurrentlyTakingAboveMedsCurrent:[''],
      PhysicalExamination:[''],
      DiagnosedMedicalConditions:[''],
      DiagnosedMedicalConditionsIfYes:[''],
      IsHeartDisease:[''],
      IsHypertension:[''],
      IsDiabetes:[''],
      IsChronicPain:[''],
      IsKidneyDisease:[''],
      IsMigrains:[''],
      IsFibromyalgia:[''],
      IsMultipleSclerosis:[''],
      IsCancer:[''],
      IsMedicalConditionOther:[''],
      IfMedicalConditionOther:[''],
      PrescribedMedications:[''],
      CurrentlyTakingAboveNotedMeds:[''],
      KnownAllergies:[''],
      IfKnwonAllergiesYes:[''],
      CliniciansSummary:[''],
      PlanIfOther:[''],
      ReferralDetails:[''],
      FollowUpOtherInfo:[''],
      TimeofComplition:[''],
      DescribeOutcomeFromResponder:[''],
      OtherDispatchedScene:[''],
      IsOutpatientMentalHealthClinic1:[''],
      IsInpatientBehavioralHealthServices1:[''],
      IsOutpatientSUDTreatment1:[''],
      IsVoluntaryEmergencyRoomVisit:[''],
      IsPeerSupportServices:[''],
      IsOutpatientMentalHealthClinic2:[''],
      InpatientBehavioralHealthServices2:[''],
      IsOutpatientSUDTreatment2:[''],
      IsCrisisStabilizationCenter:[''],
      IsCaseManagementServices:[''],
      IsOutpatientMentalHealthClinic3:[''],
      InpatientBehavioralHealthServices3:[''],
      IsOutpatientSUDTreatment3:[''],
      IsEmergencyPetition:[''],
      PlanIsOther:[''],
    })
  }
}
