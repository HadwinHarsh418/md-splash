import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthlySummaryComponent } from './monthly-summary.component';


const routes: Routes = [
  {
    path:'',
    component:MonthlySummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthlySummaryRoutingModule { }
