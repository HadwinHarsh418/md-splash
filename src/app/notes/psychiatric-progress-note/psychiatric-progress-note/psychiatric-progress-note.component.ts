import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-psychiatric-progress-note',
  templateUrl: './psychiatric-progress-note.component.html',
  styleUrls: ['./psychiatric-progress-note.component.scss']
})
export class PsychiatricProgressNoteComponent implements OnInit {
  imagesrc = '/assets/images/smail-icon.png';

  pregressNotes:FormGroup
  show:boolean = true;
  isDisable: boolean = true;
  StartTimer:any
  EndTime1:any
  TotalTimer:any
    
    constructor(private formBuilder:FormBuilder,private localToast: localToastService,
      private location:Location,private actRout: ActivatedRoute) 
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
      //1st row
      FirstName:[''],
      MiddleName:[''],
      LastName:[''],
      DateofBirth:[''],
      Age:[''],
      Gender:[''],
      DateOfSession:['',Validators.required],
      StartTime1:[''],
      EndTime1:[''],
      TotalTime1:[''],

      // 2nd row
      Rendering_ProviderID:['',Validators.required],
      ProcedureCode1:['',Validators.required],
      location_required:[''],
      ProcedureEMCode:[''],
      selectInsuranceType:[''],
      selectAuthNumber:[''],
      OtherPresentSessions:[''],

      //3rd row
      Height:[''],
      Weight:[''],
      BP_Sit:[''],
      BP_Stand:[''],
      Temp_F:[''],

      //5th row
      Notes:[''],

      //6 row
      Medications:[''],
      Dose1:[''],
      Frequency1:[''],
      Indication1:[''],
      DescriptionRequiresOngoingPCP:[''],
      DescriptionLabOrder:[''],
      DescriptionAbnormalInvoluntaryMovements:[''],

      //7row
      Axis1Code1_Description:[''],
      Goal:[''],
      DesiredResults:[''],

      //8row
      RecievedDateNote:[''],
      EnteredByName:[''],
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
