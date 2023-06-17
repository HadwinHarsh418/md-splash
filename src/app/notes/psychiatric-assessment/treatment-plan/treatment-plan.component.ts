import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
@Component({
  selector: 'app-treatment-plan',
  templateUrl: './treatment-plan.component.html',
  styleUrls: ['./treatment-plan.component.scss']
})
export class TreatmentPlanComponent implements OnInit {
  treatmentplanmobileresponse:FormGroup
  imagesrc = '/assets/images/smail-icon.png';
  constructor(private localToast: localToastService,
    private fb:FormBuilder) { 
      this.Init()
    }
    Init(){
      this.treatmentplanmobileresponse=this.fb.group({
        targetsymptomsbehaviors:[''],
        goaldreamstategoal:[''],
        statedesiredresult:[''],
        Intensity_Type:[''],
      })
    }
  ngOnInit(): void {
  }
  Save(){
    markAllDirty(this.treatmentplanmobileresponse);
    if (this.treatmentplanmobileresponse.invalid) {
      this.localToast.presentError('Please fill all required fields');
      return;
    }
    else{
      
    }
  }

}
