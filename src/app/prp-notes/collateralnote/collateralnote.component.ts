import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';
@Component({
  selector: 'app-collateralnote',
  templateUrl: './collateralnote.component.html',
  styleUrls: ['./collateralnote.component.scss']
})
export class COLLATERALNOTEComponent implements OnInit {
  CollateralNotes:FormGroup
  isDisable: boolean = true;
  StartTimer:any
  EndTime1:any
  TotalTimer:any
    
    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.CollateralNotes =this.formBuilder.group({
      FirstName:[''],
      MiddleName:[''],
      LastName:[''],
      DateofBirth:[''],
      Age:[''],
      Gender:[''],
      dateofsession:['',Validators.required],
      StartTime1:[''],
      EndTime1:[''],
      TotalTime1:[''],
      Rendering_ProviderID:['',Validators.required],
      Note:[''],
      


    })
  }

 get genForm(){
    return this.CollateralNotes.controls;
  }

  Save(){
    markAllDirty(this.CollateralNotes);
    if (this.CollateralNotes.invalid) {
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
