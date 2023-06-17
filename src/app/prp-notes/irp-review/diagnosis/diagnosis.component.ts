import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {
  diagnosisForm:FormGroup
  StartTimer:any[]=[];
  EndTime1:any[]=[]
  TotalTimer:any[]=[]

  constructor(private formBuilder:FormBuilder,private localToast: localToastService,private Location:Location) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.diagnosisForm =this.formBuilder.group({
      DiagnosticCategory1:[''],
      Axis1:[''],
      Axis1Description:[''],
      DiagnosticCategory2:[''],
      Axis2:[''],
      Axis2Description:[''],
      DiagnosticCategory3:[''],
      Axis3:[''],
      Axis3Description:[''],
      DiagnosticCategory4:[''],
      Axis4:[''],
      Axis4Description:[''],
      DiagnosticCategory5:[''],
      Axis5:[''],
      Axis5Description:[''],
      ClinicianName:[''],
      ClinicianPhone:[''],
      MostRecentDisgnosisDate:[''],
      ClinicianEmail:[''],
      ClinicianAddress:[''],
      TXClinicianName:[''],
      ddlDomian1:[''],
      LTG1:[''],
      STG1:[''],
      Interventions1:[''],
      ClientNote:['']
    })
  }

 get genForm(){
    return this.diagnosisForm.controls;
  }

  back(){
    this.Location.back()
  }
  
  Save(){
    markAllDirty(this.diagnosisForm);
    if (this.diagnosisForm.invalid) {
      this.localToast.presentError('Please fill all required fields');
      return;
    }
    else{
      
    }
  }

}
