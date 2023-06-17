import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonthlySummaryRoutingModule } from './monthly-summary-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonthlySummaryComponent } from './monthly-summary.component';


@NgModule({
  declarations: [
    MonthlySummaryComponent
  ],
  imports: [
    CommonModule,
    MonthlySummaryRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MonthlySummaryModule { }
