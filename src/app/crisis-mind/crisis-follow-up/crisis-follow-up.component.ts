import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from "@angular/common";

@Component({
  selector: 'app-crisis-follow-up',
  templateUrl: './crisis-follow-up.component.html',
  styleUrls: ['./crisis-follow-up.component.scss']
})
export class CrisisFollowUpComponent implements OnInit {
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

      // Sessin Details

      Rendering_ProviderID:[''],
      ProcedureCodes:['',Validators.required],
      NameParticipant:['',Validators.required],
      ParticipantContectNo:['',Validators.required],
      NatureOriginalCall:['',Validators.required],
      DateFollowUpCall:['',Validators.required],
      YourName:['',Validators.required],
      WhatHappened:['',Validators.required],
      AreYouAtThatLocation:['',Validators.required],
      WhenDidThisHappen:['',Validators.required],
      FollowUpConductedInPerson:['',Validators.required],
      IsIMindBehavioralHealth:['',Validators.required],
      IfOther:['',Validators.required],
      AcceptReferralsResources:['',Validators.required],
      RefferalResourcesProvided:['',Validators.required],
      ProvideBriefSummery:['',Validators.required],
      PositiveChangesParticipant:['',Validators.required],
      DescribeOriginalSafetyPlan:['',Validators.required],
      TeamMemberFollowUp:['',Validators.required],
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
