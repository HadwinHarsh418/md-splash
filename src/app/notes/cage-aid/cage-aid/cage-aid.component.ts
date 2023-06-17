import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cage-aid',
  templateUrl: './cage-aid.component.html',
  styleUrls: ['./cage-aid.component.scss']
})
export class CageAidComponent implements OnInit {

  cageForm:FormGroup
  isDisable: boolean = true;
  StartTimer:any
  EndTime1:any
  TotalTimer:any
    
    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.cageForm =this.formBuilder.group({
      FirstName:[''],
      MiddleName:[''],
      LastName:[''],
      DateofBirth:[''],
      Rendering_ProviderID:['',Validators.required],
      ProcedureCode1:['',Validators.required],
      dos:['',Validators.required]
    })
  }

 get genForm(){
    return this.cageForm.controls;
  }

  Save(){
    markAllDirty(this.cageForm);
    if (this.cageForm.invalid) {
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
