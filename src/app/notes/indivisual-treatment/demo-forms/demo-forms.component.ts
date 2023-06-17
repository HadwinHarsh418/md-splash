import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-forms',
  templateUrl: './demo-forms.component.html',
  styleUrls: ['./demo-forms.component.scss']
})
export class DemoFormsComponent implements OnInit {

  @Input() tabindex:any
  demoforms:FormGroup
  constructor(private fb:FormBuilder) {
    this.init()
   }
   init(){
    this.demoforms=this.fb.group({
      ProgressofLongTermGoal:[''],
      LongTermGoal:[''],
      ClientNeeds:[''],
      dateestablished:[''],
      dateachieved:[''],
      targetdate:[''],
      ClientNeedsIssues:[''],
      goal:[''],
      dateestablished2:[''],
      tagetdate2:[''],
      dateachieved2:[''],
      Frequency:[''],
      tratmentmodality:[''],
    })
   }
  ngOnInit(): void {
    
  }

}
