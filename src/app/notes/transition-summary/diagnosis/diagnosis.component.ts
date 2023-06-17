import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from "@angular/common";

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {
  active =1
  diagnosisForm!:FormGroup
  rows:any[]=[]

    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.initform()
  }

  initform(){
    this.diagnosisForm =this.formBuilder.group({
    City:[''],
    State:[''],
    ZipCode:[''],
    Phone:[''],
    })
  }
  get f(){
    return this.diagnosisForm.controls
  }

  back(){
    this.location.back();
  }
  Save(){}
}
