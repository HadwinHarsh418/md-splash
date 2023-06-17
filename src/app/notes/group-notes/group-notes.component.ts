import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-notes',
  templateUrl: './group-notes.component.html',
  styleUrls: ['./group-notes.component.scss']
})
export class GroupNotesComponent implements OnInit {
  pregressNotes:FormGroup

  isDisable: boolean = true;
  actionShow:boolean

  StartTimer:any
  EndTime1:any
  TotalTimer:any

  rows:any[]=[]

    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location,private activatedroute:ActivatedRoute) {
      this.activatedroute.params.subscribe((res:any)=>{
        if(res.id){
          this.actionShow=true
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
