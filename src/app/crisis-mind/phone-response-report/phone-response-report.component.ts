import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { Location } from "@angular/common";
import { markAllDirty } from 'src/app/_helpers/utils';

@Component({
  selector: 'app-phone-response-report',
  templateUrl: './phone-response-report.component.html',
  styleUrls: ['./phone-response-report.component.scss']
})
export class PhoneResponseReportComponent implements OnInit {

  pregressNotes: FormGroup
  isDisable: boolean = true;
  StartTimer: any
  EndTime1: any
  TotalTimer: any

  constructor(private formBuilder: FormBuilder, private localToast: localToastService, private location: Location) { }


  ngOnInit(): void {
    this.init();
  }

  init() {
    this.pregressNotes = this.formBuilder.group({
      FirstName: [''],
      MiddleName: [''],
      LastName: [''],
      DateofBirth: [''],
      Age: [''],
      Gender: [''],
      StartTime: ['', Validators.required],
      EndTime: ['', Validators.required],
      DOS: ['', Validators.required],
      TotalTime: ['', Validators.required],

      // Sessin Details

      Rendering_ProviderID: [''],
      ProcedureCodes: ['', Validators.required],
      PhoneNo: ['', Validators.required],
      Address: ['', Validators.required],
      Ethnicity: ['', Validators.required],
      AddressLocation: ['', Validators.required],
      TimeCrisisMindConnectedViaPhone: ['', Validators.required],
      TimePhoneContactEnd: ['', Validators.required],
      IsAdultPsychiatricEmergency: [''],
      IsChildPsychiatricEmergency: [''],
      IsDomesticVoilence1: [''],
      IsAbuseNeglectChildUnder18: [''],
      IsAbuseNeglectChildUnder65: [''],
      IsHomelessness: [''],
      IsVerbalConflict: [''],
      IsSuicidalIdeation: [''],
      IsHomicidalIdeation: [''],
      IsViolentCrime: [''],
      IsNaturalDisaster: [''],
      IsSuddenDeath: [''],
      IsSubstanceIntoxication: [''],
      IsBehavioralEmergency: [''],
      IsSelfInjury: [''],
      CurrentlyExperienceThoughtsSuicide: ['', Validators.required],
      CurrentlyExperienceThoughtsHomicide: ['', Validators.required],
      ActivePlanHarmThemselves: ['', Validators.required],
      ActivePlanHarmSomeoneElse: ['', Validators.required],
      HistoryOfAttemptingHarmThemselvesOthers: ['', Validators.required],
      UnderInfluenceOfAlcoholOtherDrugs: ['', Validators.required],
      CurrentlyAggressiveViolent: ['', Validators.required],
      CurrentPossessionOfAnyWeapon: ['', Validators.required],
      AnyAnimalOnPremises: ['', Validators.required],
      CurrentlySickCovid19Last7Days: ['', Validators.required],
      HavePertinentMedicalConditions: ['', Validators.required],
      CrisisSupportRequested: ['', Validators.required],
      ProvideBriefNarrativeCall: ['', Validators.required],
      SafetyPlanDevelopWithParticipant: ['', Validators.required],
      SummeryOfPresentingProblem: ['', Validators.required],
      SummaryPrecipitatingEvents: ['', Validators.required],
      IsiMindBehavioralHealth: [''],
      IsEmergencyPetition: [''],
      IsHospital: [''],
      IsPrimaryCareDoctor: [''],
      IsCommunityResources: [''],
      IsDomesticViolence2: [''],
      IsNationalHotline: [''],
      IsChildProtective: [''],
      IsAdultProtective: [''],
      IsGovtResources: [''],
      IsSpiritualSupport: [''],
      NameOfTeamMember: ['', Validators.required],

    })
  }
  get genForm() {
    return this.pregressNotes.controls;
  }
  Save() {
    markAllDirty(this.pregressNotes);
    if (this.pregressNotes.invalid) {
      this.localToast.presentError('Please fill all required fields');
      return;
    }
    else { 

    }
  }

  back() {
    this.location.back();
  }

}
