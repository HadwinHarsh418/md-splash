import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-generalcomponent',
  templateUrl: './generalcomponent.component.html',
  styleUrls: ['./generalcomponent.component.scss']
})
export class GeneralcomponentComponent implements OnInit {
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
      ChildFirstName:[''],
      ChildLastName:[''],
      InterViewerName:[''],
      PrevoiusInterviewDate:[''],
      DateFromCompleted:['',Validators.required],
      ProviderId:[''],
      LivingNow:[''],
      Homeless:[''],
      ChildArrested:[''],
      ChildNotInSchool:[''],
      OtherReasonChildNotInSchool:[''],
      IsProblemWithSchoolAttendance:['']

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
