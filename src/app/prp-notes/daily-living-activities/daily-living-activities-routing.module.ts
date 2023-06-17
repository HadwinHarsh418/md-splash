import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyLivingActivitiesComponent } from './daily-living-activities.component';

const routes: Routes = [
  { path:'',
  component:DailyLivingActivitiesComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyLivingActivitiesRoutingModule { }
