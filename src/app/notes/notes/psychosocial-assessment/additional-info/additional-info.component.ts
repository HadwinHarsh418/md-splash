import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent implements OnInit {

  additionalInfoForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private location:Location) { }

  ngOnInit(): void {
    this.init()
  }

  init(){
    this.additionalInfoForm =this.formBuilder.group({
      Strengths:[''],
      ClientNeeds:[''],
      ClientAbilities:[''],
      ClientPreferences:['']
    })
  }

  get AddForm(){
    return this.additionalInfoForm.controls;
  }

  Save(){
    
  }

  back(){
    this.location.back();
  }
}
