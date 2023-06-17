import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriticalIncidentReportRoutingModule } from './critical-incident-report-routing.module';
import { CriticalIncidentReportComponent } from './critical-incident-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CriticalIncidentReportComponent
  ],
  imports: [
    CommonModule, 
    CriticalIncidentReportRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CriticalIncidentReportModule { }
