import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
@Component({
  selector: 'app-iop-gap-notes',
  templateUrl: './iop-gap-notes.component.html',
  styleUrls: ['./iop-gap-notes.component.scss']
})
export class IopGapNotesComponent implements OnInit {
  iopGapNotes:FormGroup

  isDisable: boolean = true;

  StartTimer:any
  EndTime1:any
  TotalTimer:any

  rows:any[]=[]

    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.iopGapNotes =this.formBuilder.group({
      FirstName:[''],
      MiddleName:[''],
      LastName:[''],
      DateofBirth:[''],
      Age:[''],
      Gender:[''],
      StartTime1:[''],
      EndTime1:[''],
      TotalTime1:[''],
      Dos:['',Validators.required],

      // Sessin Details

      Rendering_ProviderID:['',Validators.required],
      ProcedureCode1:['',Validators.required],
      location_required:['',Validators.required],
      hdnInsuranceType:[''],
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
      Sign_RenderingProvider:[''],
      


    })
  }

 get genForm(){
    return this.iopGapNotes.controls;
  }

  Save(){
    markAllDirty(this.iopGapNotes);
    if (this.iopGapNotes.invalid) {
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
