import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';
import { TherapyandpsychiatricComponent } from 'src/app/billing/therapyandpsychiatric/therapyandpsychiatric.component';
@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html',
  styleUrls: ['./strengths.component.scss']
})
export class StrengthsComponent implements OnInit {
  dtrengthform:FormGroup
  constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) {
    this.init()
   }
   init(){
    this.dtrengthform=this.formBuilder.group({
      strengths:[''],
      needs:[''],
      abilities:[''],
      prefrences:[''],
      summary:[''],
      frequency:[''],
      progressachieved:[''],
      dtrengthform:[''],
    })
   }

  ngOnInit(): void {
  }
  back(){
    this.location.back();
  }
  Save(){}
}
