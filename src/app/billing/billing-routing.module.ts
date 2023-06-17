import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchlistingComponent } from './batchlisting/batchlisting.component';
import { BillingComponent } from './billing/billing.component';
import { EncounterComponent } from './encounter/encounter.component';
import { TherapyandpsychiatricComponent } from './therapyandpsychiatric/therapyandpsychiatric.component';

const routes: Routes = [
  {
    path:'',
    component:BillingComponent
  },
  {
    path:'encounter',
    component:EncounterComponent
  },
  {
    path:'therapyandpsychiatric',
    component:TherapyandpsychiatricComponent
  },
  {
    path:'batchlisting',
    component:BatchlistingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
