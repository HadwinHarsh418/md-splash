import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discharge-info',
  templateUrl: './discharge-info.component.html',
  styleUrls: ['./discharge-info.component.scss']
})
export class DischargeInfoComponent implements OnInit {

  pregressNotes:FormGroup

  isDisable: boolean = true;

  StartTimer:any
  EndTime1:any
  TotalTimer:any


    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location,
      ) {
        
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

      // Sessin Details

      Rendering_ProviderID:[''],
      ProcedureCode1:[''],
      location_required:[''],




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
