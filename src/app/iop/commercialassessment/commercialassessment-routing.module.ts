import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { COMMERCIALASSESSMENTComponent } from './commercialassessment/commercialassessment.component';
import { GeneralinformationComponent } from './generalinformation/generalinformation.component';
import { RiskAssessmentComponent } from './risk-assessment/risk-assessment.component';
import { SignatureComponent } from './signature/signature.component';

const routes: Routes = [
  {
    path:'',
    component:COMMERCIALASSESSMENTComponent
  },
  {
    path:'general',
    component:GeneralinformationComponent
  },
  {
    path:'riskassessment',
    component:RiskAssessmentComponent
  },
  {
    path:'signature',
    component:SignatureComponent
  },
  {
    path:'diagnosis',
    component:GeneralinformationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class COMMERCIALASSESSMENTRoutingModule { }
