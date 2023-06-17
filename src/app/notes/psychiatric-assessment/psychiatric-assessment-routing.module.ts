import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsychiatricAssessmentComponent } from './psychiatric-assessment.component';

const routes: Routes = [
  {path:'',component:PsychiatricAssessmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsychiatricAssessmentRoutingModule { }
