import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  @Input() tabindex:any
  goalform:FormGroup
  StartTimer:any[]=[];
  EndTime1:any[]=[]
  TotalTimer:any[]=[]

  constructor(private fb:FormBuilder) {
    this.init()
   }
   init(){
    this.goalform=this.fb.group({
      LongTermGoal:[''],
      ProgressofLongTermGoal:[''],
      DateEstablished:[''],
      TargetDate:[''],
      DateAchieved:[''],
      ClientNeeds:[''],
      dateestablished:[''],
      targetdate:[''],
      dateachieved2:[''],
      ClientNeedsMainIssues:[''],
      Frequency:[''],
      treatment:[''],
      Goal:[''],
    })
   }
  ngOnInit(): void {
  }

  Save(){}
}