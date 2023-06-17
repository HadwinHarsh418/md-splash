import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  generalForm:FormGroup
  isDisable: boolean = true;
  StartTimer:any
  EndTime1:any
  TotalTimer:any
    
    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.generalForm =this.formBuilder.group({
      FirstName:[''],
      MiddleName:[''],
      LastName:[''],
      DateofBirth:[''],
      Gender:[''],
      Age:[''],
      EndTime1:[''],
      StartTime1:[''],
      TotalTime1:[''],
      Rendering_ProviderID:[''],
      ProcedureCode1:[''],
      DOS:['',Validators.required],
      Rendering_Provider:['',Validators.required],
      proCode:['',Validators.required],
      authNumber:['',Validators.required],
    })
  }

 get genForm(){
    return this.generalForm.controls;
  }

  Save(){
    markAllDirty(this.generalForm);
    if (this.generalForm.invalid) {
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
