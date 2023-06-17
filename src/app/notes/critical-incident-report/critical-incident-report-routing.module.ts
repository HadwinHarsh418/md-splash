import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriticalIncidentReportComponent } from './critical-incident-report.component';

const routes: Routes = [
  {path:'',component:CriticalIncidentReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriticalIncidentReportRoutingModule { }
