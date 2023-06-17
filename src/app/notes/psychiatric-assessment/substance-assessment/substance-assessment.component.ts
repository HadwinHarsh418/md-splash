import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-substance-assessment',
  templateUrl: './substance-assessment.component.html',
  styleUrls: ['./substance-assessment.component.scss']
})
export class SubstanceAssessmentComponent implements OnInit {
  imagesrc = '/assets/images/smail-icon.png';
  substanceAssesmentform:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.Init()
  }
  Init(){
    this.substanceAssesmentform=this.fb.group({
      CurrentSubstance:[''],
      PriorSubstance:[''],
      comments:[''],
      Anychanges:[''],
      Comments2:[''],
      Hasindividual:[''],
      Hasindividual2:[''],
      historyofoverdose:[''],
      historyofoverdose2:[''],
      historyofseizures:[''],
      historyofseizures2:[''],
      doesindividualdrink :[{value:'', disabled: true}],
      // doesindividualdrink2 :[{value: this.substanceAssesmentform['doesindividualdrink2'] || '', disabled: this.doesindividualdrink2}],
      historyofbalackout :[''],
      historyofbalackout2 :[''],
      individualeverusedmedications:[''],
      individualeverusedmedications2:[''],
      Withwhomdoesindividual:[''],
      Withwhomdoesindividual2:[''],
      Hasindividualhadprevious2:[''],
      Hasindividualhadprevious:[''],
      DiagnosticImpressions:[''],
    })
  }
  doesindividualdrink(){
    this.substanceAssesmentform.controls['doesindi/vidualdrink2'].enable()
  }

  disableVal(event:any){
    if(event.target.value == '1'){
      this.substanceAssesmentform.controls['doesindividualdrink'].enable();
    }else{
      this.substanceAssesmentform.controls['doesindividualdrink'].setValue('')
      this.substanceAssesmentform.controls['doesindividualdrink'].disable();
    }
  }

  ngOnInit(): void {
  }
  Save(){}

}
