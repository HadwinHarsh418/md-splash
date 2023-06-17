import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from "@angular/common";


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  goalForm:FormGroup

  isDisable: boolean = true;

  StartTimer:any
  EndTime1:any
  TotalTimer:any

  @Input() tabindex:any

    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.goalForm =this.formBuilder.group({
      GOAL1StateGoalCollaboration:[''],
      GOAL1Clientwords:[''],
      GOAL1Guardianwords:[''],
      GOAL1Clinicalwords:[''],
      GOAL1TargetDate:[''],
      GOAL1MHLevelCare:[''],
      GOAL1SUDLevelCare:[''],
      GOAL1CognitiveKnowledge:[''],
      GOAL1Objective1:[''],
      GOAL1Objective2:[''],
      GOAL1Objective3:[''],
      GOAL1ServiceDescription1:[''],
      GOAL1Frequency1:[''],
      GOAL1ProviderName1:[''],
      GOAL1:[''],
      GOAL1Active:[''],
      GOAL1Inactive:[''],
      GOAL1Deterioration:[''],
      GOAL1NoChange:[''],
      GOAL1MildImprovement:[''],
      GOAL1ModerateImprovement:[''],
      GOAL1Achieved:[''],
      
    })
  }

 get genForm(){
    return this.goalForm.controls;
  }

  Save(){
    markAllDirty(this.goalForm);
    if (this.goalForm.invalid) {
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
