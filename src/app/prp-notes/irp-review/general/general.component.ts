import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  general:FormGroup
  StartTimer:any[]=[];
  EndTime1:any[]=[]
  TotalTimer:any[]=[]

  constructor(private formBuilder:FormBuilder,private localToast: localToastService,private Location:Location) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.general =this.formBuilder.group({
      Fname:[''],
      Mname:[''],
      Lname:[''],
      StartTime1:[''],
      EndTime12:[''],
      TotalTime1:[''],
      dob:[''],
      age:[''],
      sex:[''],
      dos:['',Validators.required],
      Stime:[''],
      Etime:[''],
      duration:[''],
      RenderingProviderID:['',Validators.required],
      ProcedureCode1:[''],
      Location:[''],
      selectInsuranceType:[''],
      selectAuthNumber:['',Validators.required],
      CurrentIRPDateFrom:[''],
      CurrentIRPDateTo:[''],
      IRPRDate:[''],
      MA:[''],
      OtherPresentName:[''],
      GuardianFirstName:[''],
      GuardianMiddleName:[''],
      GuardianLastName:[''],
      GuardianRelation:[''],
      GuardianEmail:[''],
      GuardianPhone:[''],
      GuardianAddress:[''],
    })
  }

 get genForm(){
    return this.general.controls;
  }

  back(){
    this.Location.back()
  }
  
  Save(){
    markAllDirty(this.general);
    if (this.general.invalid) {
      this.localToast.presentError('Please fill all required fields');
      return;
    }
    else{
      
    }
  }

}
