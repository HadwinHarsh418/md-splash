import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LucasIndividualizedTreatmentComponent } from './lucas-individualized-treatment.component';

const routes: Routes = [
  {path:'',component:LucasIndividualizedTreatmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LucasIndividualizedTreatmentRoutingModule { }
