import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdultDiagnosisAssesmentComponent } from '../adult-diagnosis-assesment/adult-diagnosis-assesment/adult-diagnosis-assesment.component';
import { AdultDischargeFormComponent } from './adult-discharge-form/adult-discharge-form.component';

const routes: Routes = [
  {path:'',component:AdultDischargeFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdultDischargeFormRoutingModule { }
