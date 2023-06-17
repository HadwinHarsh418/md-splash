import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-treatment-plan',
  templateUrl: './treatment-plan.component.html',
  styleUrls: ['./treatment-plan.component.scss']
})
export class TreatmentPlanComponent implements OnInit {
  imagesrc = '/assets/images/smail-icon.png';
  treatmentplaniop:FormGroup
  constructor(private fb:FormBuilder) { 
    this.init()
  }
  init(){
    this.treatmentplaniop=this.fb.group({
      targetsymptoms:[''],
      textarea1:[''],
      textarea2:[''],
      textarea3:[''],
      textarea4:[''],
      textarea5:[''],
      objectivesofthisservice:[''],
      targetdatesiop:[''],
    })
  }
  ngOnInit(): void {
  }
  save(){}

}
