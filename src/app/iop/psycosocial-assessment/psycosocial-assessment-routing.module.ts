import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IopPsycosocialDiagnosisComponent } from './iop-psycosocial-diagnosis/iop-psycosocial-diagnosis.component';
import { IopPsycosocialGeneralComponent } from './iop-psycosocial-general/iop-psycosocial-general.component';
import { PsycosocialAssessmentComponent } from './psycosocial-assessment.component';

const routes: Routes = [
  {path:'',component:PsycosocialAssessmentComponent},
  {path:'Diagnosis',component:IopPsycosocialDiagnosisComponent},
  {path:'general',component:IopPsycosocialGeneralComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsycosocialAssessmentRoutingModule { }
