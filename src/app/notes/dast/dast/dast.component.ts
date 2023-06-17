import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dast',
  templateUrl: './dast.component.html',
  styleUrls: ['./dast.component.scss']
})
export class DastComponent implements OnInit {

  dastForm:FormGroup
  isDisable: boolean = true;
  StartTimer:any
  EndTime1:any
  TotalTimer:any
    
    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.dastForm =this.formBuilder.group({
      FirstName:[''],
      MiddleName:[''],
      LastName:[''],
      DateofBirth:[''],
      dos:['',Validators.required],
      Rendering_ProviderID:['',Validators.required],
      ProcedureCode1:['',Validators.required],
    })
  }

 get genForm(){
    return this.dastForm.controls;
  }

  Save(){
    markAllDirty(this.dastForm);
    if (this.dastForm.invalid) {
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
