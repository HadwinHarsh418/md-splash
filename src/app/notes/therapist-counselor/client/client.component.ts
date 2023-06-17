import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
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
      LastName:[''],
      DateofBirth:[''],
      Age:[''],
      Gender:[''],
      DateOfSession:['',Validators.required],
      StartTime1:[''],
      EndTime1:[''],
      TotalTime1:[''],

      // Sessin Details

      Rendering_ProviderID:['',Validators.required],
      ProcedureCode1:['',Validators.required],
      location_required:['',Validators.required],
      POSA:[''],
      POSCH:[''],
      POSC:[''],
      POSS:[''],
      POSO:[''],
      ContactCodeFC:[''],
      ContactCodeCH :[''],
      ContactCodeC:[''],
      ContactCodeS:[''],
      ContactCodeTEO:[''],
      ContactCodeFEO:[''],
      ContactCodeTC:[''],
      CPSTGroup:[''],
      DAYTreatment:[''],
      FamilyCounseling:[''],
      PSRIndividual:[''],
      IndividualTherapy:[''],
      TBSIndividual:[''],
      CPSTIndividual:[''],
      SUD:[''],
      TelemedicineService:[''],
      NonBillableNoShow:[''],
      NonBillableCancellation:[''],
      NonBillableOther:[''],
      PersonPresent:[''],
      OtherPersonPresent:[''],
      PersonCancelled:[''],
      PersonNotPresent:[''],
      ObservedNone:[''],
      ObservedNew:[''],
      ObservedChanges:[''],
      CurrentStressors:[''],
      HistoricalStressors:[''],
      NewIssuePresentedToday:[''],
      UpdateTreatementPlan:[''],
      Arrangedforrisk:[''],
      TreatmentPlanGoal:[''],
      TreatmentPlanObjective:[''],
      TreatmentPlanToday:[''],
      ResponseToday:[''],
      HomeworkAssignments:[''],
      NextSession:[''],
      AgreedtoNextSession:[''],
      TodayNoProgress:[''],
      TodayProgress:[''],
      RelativeChangesMDDO:[''],
      RelativeChangesAFFECT:[''],
      RelativeTHOUGHTCONTENT:[''],
      RelativeTHOUGHTPROCESS:[''],
      RelativeINSIGHT:[''],
      RelativeJUDGMENT:[''],
      RelativeOrientationX4:[''],
      RelativeRiskofDanger:[''],
      ServiceProvided:[''],
      Sign_RenderingProvider:[''],
      ProcedureCode2:[''],
      POSTEO:[''],


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
