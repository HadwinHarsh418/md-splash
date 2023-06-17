import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from "@angular/common";

@Component({
  selector: 'app-crisis-mind-mtc',
  templateUrl: './crisis-mind-mtc.component.html',
  styleUrls: ['./crisis-mind-mtc.component.scss']
})
export class CrisisMindMtcComponent implements OnInit {
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
      NameEmail:['',Validators.required],
      Date:['',Validators.required],
      ThreeInternalCopyStrategies:['',Validators.required],
      FourPeoplePlaces:['',Validators.required],
      ThreeWarningSign:['',Validators.required],
      ICanAskForHelp:['',Validators.required],
      ProfessionalAgencies:['',Validators.required],
      TwoThingMakeEnvironmntSafe:['',Validators.required],
      OneThingMostImportantToMe:['',Validators.required],
      Signature:['',Validators.required],
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
