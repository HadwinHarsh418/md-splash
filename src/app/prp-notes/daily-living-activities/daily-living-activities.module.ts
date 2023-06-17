import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyLivingActivitiesRoutingModule } from './daily-living-activities-routing.module';
import { DailyLivingActivitiesComponent } from '../daily-living-activities/daily-living-activities.component';


@NgModule({
  declarations: [
    DailyLivingActivitiesComponent
  ],
  imports: [
    CommonModule,
    DailyLivingActivitiesRoutingModule
  ]
})
export class DailyLivingActivitiesModule { }
