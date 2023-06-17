import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdultDiagnosisAssesmentComponent } from './adult-diagnosis-assesment/adult-diagnosis-assesment.component';
import { ClinicalSummaryComponent } from './clinical-summary/clinical-summary.component';

const routes: Routes = [
  {path:'',
  component:AdultDiagnosisAssesmentComponent},
  {path:'clinicalsummary',
  component:ClinicalSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdultDiagnosisAssesmentRoutingModule { }
