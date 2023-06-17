import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { markAllDirty } from 'src/app/_helpers/utils';
import { localToastService } from 'src/app/_helpers/services/toaster.service';

@Component({
  selector: 'app-initial-clinical',
  templateUrl: './initial-clinical.component.html',
  styleUrls: ['./initial-clinical.component.scss']
})
export class InitialClinicalComponent implements OnInit {
  initialClinical:FormGroup

  StartTimer:any[]=[]

  constructor(private Location:Location,private formBuilder:FormBuilder,private localToast:localToastService) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.initialClinical = this.formBuilder.group({
      FirstName : [''],
      LastName : [''],
      MiddleName : [''],
      DateofBirth : [''],
      Age : [''],
      Gender : [''],
      DateofVisit : ['',Validators.required],
      Location : ['',Validators.required],
      TypeofCrisis : [''],
      Assessment : [''],
      StartTime : [''],
      EndTime : [''],
      TotalTime : [''],
      Rendering_ProviderId : ['',Validators.required],
      Note : [''],
    })
  }
  get f(){
    return this.initialClinical.controls;
  }
 
  Save(){
    markAllDirty(this.initialClinical);
    if (this.initialClinical.invalid) {
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
