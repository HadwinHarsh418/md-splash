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

  mentalStatus:FormGroup;
  constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.Init()
  }
  Init(){
    this.mentalStatus=this.formBuilder.group({
      attitude:['']
    })
  }
  back(){
    this.location.back();
  }
  Save(){}
}
