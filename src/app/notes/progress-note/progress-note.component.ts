import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-progress-note',
  templateUrl: './progress-note.component.html',
  styleUrls: ['./progress-note.component.scss']
})
export class ProgressNoteComponent implements OnInit {
  pregressNotes:FormGroup
  isDisable: boolean = true;
  StartTimer:any
  EndTime1:any
  TotalTimer:any
  show:boolean = true;

    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location,
      private actRout: ActivatedRoute) 
      {
        this.actRout.params.subscribe((res:any)=>{
          if(res.id == '1'){
            this.show = false;
          }
          else {
            this.show = true;
          }
        })
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

      Rendering_ProviderID:['',Validators.required],
      ProcedureCode1:['',Validators.required],
      location_required:['',Validators.required],
      hdnInsuranceType:['',Validators.required],
      selectAuthNumber:['',Validators.required],
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
