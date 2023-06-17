import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuicideRiskAssessmentRoutingModule } from './suicide-risk-assessment-routing.module';
import { SuicideRiskAssessmentComponent } from './suicide-risk-assessment/suicide-risk-assessment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SuicideRiskAssessmentComponent
  ],
  imports: [
    CommonModule,
    SuicideRiskAssessmentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    SuicideRiskAssessmentComponent
  ]
})
export class SuicideRiskAssessmentModule { }
