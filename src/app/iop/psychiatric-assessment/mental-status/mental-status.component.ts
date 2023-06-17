import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mental-status',
  templateUrl: './mental-status.component.html',
  styleUrls: ['./mental-status.component.scss']
})
export class MentalStatusComponent implements OnInit {
  mentalstatusiop:FormGroup
  constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) {
    this.init()
   }
   init(){
    this.mentalstatusiop=this.formBuilder.group({
      attitudeandbehavior:[''],
      StreamofMental:[''],
      emotionalreaction:[''],
      mentaltreand:[''],
      sensorium:[''],
      insightandjugment:[''],
    })
   }

  ngOnInit(): void {
  }

  back(){
    this.location.back();
  }
  
  Save(){}
}
