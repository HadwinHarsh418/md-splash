import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from "@angular/common";

@Component({
  selector: 'app-mobile-progress-note-csr',
  templateUrl: './mobile-progress-note-csr.component.html',
  styleUrls: ['./mobile-progress-note-csr.component.scss']
})
export class MobileProgressNoteCsrComponent implements OnInit {
  mobileprogressnotecsr:FormGroup

    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location,
      private actRout: ActivatedRoute) 
      {
      }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.mobileprogressnotecsr =this.formBuilder.group({
      CommunitySupportSpecialist:[''],
      chkIsIdentification:[''],
      chkIsHousing:[''],
      HousingBy:[''],
      HousingDate:[''],
      MonthlyIncome:[''],
      MonthlyBenifits:[''],
      IsRepresentativePayee:[''],
      IsClientNeedClothing:[''],
      IsClientNeedFood:[''],
      IsClientNeedEmployment:[''],
      IsClientNeedTransportation:[''],
      IsClientNeedDayProgram:[''],
      IsClientNeedSubstanceAbuseTreatment:[''],
      IsClientNeedADL:[''],
    })
  }

 get genForm(){
    return this.mobileprogressnotecsr.controls;
  }

  Save(){
    markAllDirty(this.mobileprogressnotecsr);
    if (this.mobileprogressnotecsr.invalid) {
      this.localToast.presentError('Please fill all required fields');
      return;
    }
    else{ 
      
    }
  }


}

