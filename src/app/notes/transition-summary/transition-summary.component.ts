import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from "@angular/common";

@Component({
  selector: 'app-transition-summary',
  templateUrl: './transition-summary.component.html',
  styleUrls: ['./transition-summary.component.scss']
})
export class TransitionSummaryComponent implements OnInit {
  active =1

  rows:any[]=[]

    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
  }
  back(){
    this.location.back();
  }


}
