import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransitionSummaryComponent } from './transition-summary.component';

const routes: Routes = [
  {path:'',component:TransitionSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransitionSummaryRoutingModule { }
