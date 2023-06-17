import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from "@angular/common";

@Component({
  selector: 'app-mobile-behavioral-health',
  templateUrl: './mobile-behavioral-health.component.html',
  styleUrls: ['./mobile-behavioral-health.component.scss']
})
export class MobileBehavioralHealthComponent implements OnInit {
  imagesrc = '/assets/images/smail-icon.png';

  behaviourHealth:FormGroup
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
    this.behaviourHealth =this.formBuilder.group({
      //1st row
      FirstName:[''],
      MiddleName:[''],
      LastName:[''],
      DateofBirth:[''],
      Age:[''],
      Gender:[''],
      DateOfSession:['',Validators.required],
      StartTime1:[''],
      StartTime:[''],
      EndTime1:[''],
      EndTime:[''],
      TotalTime1:[''],
      TotalTime:[''],

      // 2nd row
      Rendering_ProviderID:['',Validators.required],
      ProcedureCode1:['',Validators.required],
      location_required:[''],
      ProcedureEMCode:[''],
      selectInsuranceType:[''],
      selectAuthNumber:[''],
      Diagnosis:[''],
      Allergies:[''],
      hdnInsuranceType:[''],
    })
  }

 get f(){
    return this.behaviourHealth.controls;
  }

  Save(){
    markAllDirty(this.behaviourHealth);
    if (this.behaviourHealth.invalid) {
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
