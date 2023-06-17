import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';
@Component({
  selector: 'app-imindreferral',
  templateUrl: './imindreferral.component.html',
  styleUrls: ['./imindreferral.component.scss']
})
export class ImindreferralComponent implements OnInit {

  pregressNotes:FormGroup
  isDisable: boolean = true;
  StartTimer:any
  EndTime1:any
  TotalTimer:any
    
    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.pregressNotes =this.formBuilder.group({
      FirstName:[''],
      MiddleName:[''],
      LastName:[''],
      DateofBirth:['',Validators.required],
      Age:[''],
      Gender:[''],
      StartTime1:[''],
      EndTime1:[''],
      DOS:['',Validators.required],
      TotalTime1:[''],

      // Sessin Details

      Rendering_ProviderID:[''],
      Procedure:['',Validators.required],
      Address:['',Validators.required],
      Phone:['',Validators.required],
      InsuranceProvider:['',Validators.required],
      date:['',Validators.required],
      time:['',Validators.required],
      personCalling:['',Validators.required],
      CurrentOccupation:['',Validators.required],
      PhoneNo:['',Validators.required],
      howManyChildren:['',Validators.required],
      Whodoyoulive:['',Validators.required],
      Whatisyour:['',Validators.required],
      haveYouEverServed:['',Validators.required],
      believeinaHigherPower:['',Validators.required],
      hasAnyoneInYourFamily:['',Validators.required],
      hasAnyoneInYourFamilyattemptedsuicide:['',Validators.required],
      inputafterhasAnyoneInYourFamily:['',Validators.required],
      inputAfterAttempting:['',Validators.required],
      currentsomatichealth:['',Validators.required],
      currentmedicationsyouaretaking:['',Validators.required],
      currentlyhavingsuicidalthoughts:['',Validators.required],
      suicidalthoughtsinthepast:['',Validators.required],
      Haveyouattemptedsuicide:['',Validators.required],
      currentlyhavingviolentorhomicidal:['',Validators.required],
      participantemotionsSelectallthat:['',Validators.required],
      symptomsorproblemsyouareexperiencing:[''],
      symptomsorproblemsyouareexperiencing2:[''],
      symptomsorproblemsyouareexperiencing3:[''],
      

    })
  }

 get genForm(){
    return this.pregressNotes.controls;
  }

  Save(){
    markAllDirty(this.pregressNotes);
    if (this.pregressNotes.invalid) {
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
