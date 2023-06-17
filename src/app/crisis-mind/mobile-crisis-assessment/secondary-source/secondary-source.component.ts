import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from "@angular/common";

@Component({
  selector: 'app-secondary-source',
  templateUrl: './secondary-source.component.html',
  styleUrls: ['./secondary-source.component.scss']
})
export class SecondarySourceComponent implements OnInit {
  pregressNotes:FormGroup
  isDisable: boolean = true;
    
    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.pregressNotes =this.formBuilder.group({
      Name:[''],
      Address:[''],
      Phone:[''],
      RelationshipToConsumer:[''],
      DescribeWhatLedToCall:[''],
      IsAdultPsychiatricEmergency:[''],
      IfOther2:[''],
      Appearance:[''],
      AppearanceOther:[''],
      Speech:[''],
      SpeechOther:[''],
      EyeContact:[''],
      EyeContactOther:[''],
      MotorActivity:[''],
      MotorActivityOther:[''],
      Affect:[''],
      AffectComments:[''],
      Mood:[''],
      OrientationImpairment:[''],
      MemoryImpairment:[''],
      MemoryImpairmentOther:[''],
      Attention:[''],
      AttentionOther:[''],
      AttentionComments:[''],
      Hallucinations:[''],
      Derealization:[''],
      Depersonalization:[''],
      Detachment:[''],
      OtherComments:[''],
      Suicidality:[''],
      Homicidal:[''],
      Delusional:[''],
      DelusionalComments:[''],
      BehaviourOther:[''],
      Behaviour:[''],
      BehaviourComments:[''],
      Insight:[''],
      InsightComments:[''],
      JUDGEMENT:[''],
      JUDGEMENTComments:[''],
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
