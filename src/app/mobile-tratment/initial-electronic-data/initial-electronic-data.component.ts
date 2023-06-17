import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from "@angular/common";

@Component({
  selector: 'app-initial-electronic-data',
  templateUrl: './initial-electronic-data.component.html',
  styleUrls: ['./initial-electronic-data.component.scss']
})
export class InitialElectronicDataComponent implements OnInit {
  initialElectronicForm:FormGroup

  StartTimer:any[]=[]
  EndTime1:any[]=[]
  TotalTimer:any[]=[]

  constructor(private Location:Location,private formBuilder:FormBuilder,private localToast:localToastService) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.initialElectronicForm = this.formBuilder.group({
      FirstName : [''],
      LastName : [''],
      MiddleName : [''],
      DateofBirth : [''],
      Age : [''],
      Gender : [''],
      DateofVisit : ['',Validators.required],
      StartTime : [''],
      EndTime : [''],
      TotalTime : [''],
      Rendering_ProviderId : ['',Validators.required],
      Complainant : [''],
      AvgResponseTime : [''],
      NoOfVisits : [''],
      AssessmentType : [''],
      NarrativeOfSymptoms : ['',Validators.required],
      ddlReferralType : ['',Validators.required],
      ddlTypeofResponse : ['',Validators.required],
      ddlDiversionFrom : ['',Validators.required],
      MonthlySummary : ['',Validators.required],
    })
  }
  get f(){
    return this.initialElectronicForm.controls;
  }
 
  Save(){
    markAllDirty(this.initialElectronicForm);
    if (this.initialElectronicForm.invalid) {
      this.localToast.presentError('Please fill all required fields');
      return;
    }
    else{ 
      
    }
  }

  back(){
    this.Location.back();
  }
}
