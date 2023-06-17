import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuicideRiskAssessmentComponent } from './suicide-risk-assessment/suicide-risk-assessment.component';

const routes: Routes = [
  {path:'',component:SuicideRiskAssessmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuicideRiskAssessmentRoutingModule { }
