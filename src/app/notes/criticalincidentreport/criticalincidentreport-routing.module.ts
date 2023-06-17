import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriticalincidentreportComponent } from './criticalincidentreport/criticalincidentreport.component';

const routes: Routes = [
  {
    path:'',
    component:CriticalincidentreportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriticalincidentreportRoutingModule { }
