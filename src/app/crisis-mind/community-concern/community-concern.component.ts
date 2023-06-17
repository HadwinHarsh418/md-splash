import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-community-concern',
  templateUrl: './community-concern.component.html',
  styleUrls: ['./community-concern.component.scss']
})
export class CommunityConcernComponent implements OnInit {
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
      MiddleName:[''],
      LastName:[''],
      DateofBirth:['',Validators.required],
      Age:[''],
      Gender:[''],
      StartTime1:[''],
      EndTime1:[''],
      DOS:['',Validators.required],
      TotalTime1:[''],
      
      Rendering_ProviderID:['',Validators.required],
      ProcedureCode1:['',Validators.required],
      firstnlastname:['',Validators.required],
      created_date:['',Validators.required],
      Date_Case:['',Validators.required],
      Caller_Concern:['',Validators.required],
      MCTresponse:['',Validators.required],
      timeMTCArrival:['',Validators.required],
      MTCteamresponsing:['',Validators.required],
      nameOfParticipant:['',Validators.required],
      participant_Address:['',Validators.required],
      participant_DOB:['',Validators.required],
      wasTheNAtureOfThOriginal:['',Validators.required],
      location_required:[''],
      providedtoparticipant:['',Validators.required],
      hdnInsuranceType:[''],
      contactInfo:['',Validators.required],
      whatWasTheParticipants:['',Validators.required],
      selectAuthNumber:[''],
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
      ParticipantName:[''],
      crisScene:[''],
      crisLeave:[''],
      ParticipantAge1:[''],
      ParticipantAge2:[''],
      ParticipantAge3:[''],
      ParticipantAge4:[''],
      Sign_RenderingProvider:[''],
      teamMember1:[''],
      teamMember2:[''],
      teamMember3:[''],
      teamMember4:[''],
      teamMember5:[''],
      teamMember6:[''],
      teamMember7:[''],
      
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
