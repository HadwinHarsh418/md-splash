import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndivisualTreatmentComponent } from './indivisual-treatment/indivisual-treatment.component';

const routes: Routes = [
  {path:'',component:IndivisualTreatmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndivisualTreatmentRoutingModule { }
