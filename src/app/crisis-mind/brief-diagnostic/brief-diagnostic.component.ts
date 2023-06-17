import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-brief-diagnostic',
  templateUrl: './brief-diagnostic.component.html',
  styleUrls: ['./brief-diagnostic.component.scss']
})
export class BriefDiagnosticComponent implements OnInit {

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
      date:['',Validators.required],
      time:['',Validators.required],
      personCalling:['',Validators.required],
      PhoneNo:['',Validators.required],
      MaritalStatus:['',Validators.required],
      howManyChildren:['',Validators.required],
      Whodoyoulive:['',Validators.required],
      Whatisyour:['',Validators.required],
      haveYouEverServed:['',Validators.required],
      doYouBelieveInAHigherPower:['',Validators.required],
      hasAnyoneInYourFamily:['',Validators.required],
      hasAnyoneInYourFamilyattemptedsuicide:['',Validators.required],
      inputafterhasAnyoneInYourFamily:['',Validators.required],
      inputAfterAttempting:['',Validators.required],
      currentsomatichealth:['',Validators.required],
      inputAftercurrentsomatichealth:['',Validators.required],
      attendedanydoctorsappointments:['',Validators.required],
      currentlyprescribedanymedication:['',Validators.required],
      listAllCurrentMedication:['',Validators.required],
      Pleasedescriptionofthepresenting:['',Validators.required],
      Howlonghaveyoubeenexperiencing:['',Validators.required],
      givenamentalhealthdiagnosis:['',Validators.required],
      prescribedanypsychotropicmedication:['',Validators.required],
      participantcurrentlytakingprescribed:['',Validators.required],
      belowsymptomsorchallenges:['',Validators.required],
      belowsymptomsorchallenges2:['',Validators.required],
      Pleasedescribeindetail:['',Validators.required],
      ifYescurrentlyexperiencinganythoughtsofsuicide:['',Validators.required],
      currentlyexperiencinganythoughtsofsuicide:['',Validators.required],
      Ifyespleasedescribe:['',Validators.required],
      thoughtsofsuicideharmingyourself:['',Validators.required],
      pleasedescribethethoughtsindetail:['',Validators.required],
      youeverattemptedsuicideinthepast:['',Validators.required],
      ifYESyoueverattemptedsuicideinthepast:['',Validators.required],
      currentexperiencinganythoughtsofviolence:['',Validators.required],
      ifYEScurrentexperiencinganythoughtsofviolence:['',Validators.required],
      describeindetailanyplanofviolence:['',Validators.required],
      experiencedanytraumasinyourlife:['',Validators.required],
      ifYESexperiencedanytraumasinyourlife:['',Validators.required],
      participantsbehavior:['',Validators.required],
      providegeneraldetailsaboutwhatoccurred:['',Validators.required],
      ThoughtContent:['',Validators.required],
      ThoughtProcess:['',Validators.required],
      Insight:['',Validators.required],
      ParticipantName:['']

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
