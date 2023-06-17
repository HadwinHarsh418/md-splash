import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mobile-progress-note-general',
  templateUrl: './mobile-progress-note-general.component.html',
  styleUrls: ['./mobile-progress-note-general.component.scss']
})
export class MobileProgressNoteGeneralComponent implements OnInit {
  pregressNotes:FormGroup
  StartTimer:any
  EndTime1:any
  TotalTimer:any

    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location,
      private actRout: ActivatedRoute) 
      {
      }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.pregressNotes =this.formBuilder.group({
      FirstName:[''],
      MiddleName:[''],
      LastName:[''],
      DateofBirth:[''],
      Age:[''],
      Gender:[''],
      StartTime1:[''],
      EndTime1:[''],
      Dos:['',Validators.required],
      TotalTime1:[''],

      // Sessin Details

      Rendering_ProviderID:[''],
      ProcedureCode1:['',Validators.required],
      location_required:['',Validators.required],
      Situation:[''],
      Intervention:[''],
      Response:[''],
      Plan:[''],
      OtherPresentName:[''],
      Sleep:[''],
      MedicationCompliance:[''],
      DateOfLastSubstanceUse:[''],
      ClientSignificantChange:[''],
      DangerNone:[''],
      DangerSelf:[''],
      DangerOthers:[''],
      DangerProperty:[''],
      SuicidialNone:[''],
      Ideation:[''],
      SuicidialPlan:[''],
      Intent:[''],
      Attempt:[''],
      selectAuthNumber:[''],
      hdnInsuranceType:[''],
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

