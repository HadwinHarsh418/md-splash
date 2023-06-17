import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportSessionRoutingModule } from './report-session-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReportSessionComponent } from './report-session.component';
import { ReportSessionByWeekComponent } from './report-session-by-week/report-session-by-week.component';
import { ReportSessionByWeek2Component } from './report-session-by-week2/report-session-by-week2.component';
import { ReportSessionRecievedComponent } from './report-session-recieved/report-session-recieved.component';
import { ReportCalenderSessionComponent } from './report-calender-session/report-calender-session.component';
import { ReportPrpSessionComponent } from './report-prp-session/report-prp-session.component';
import { ReportPrpSessionCountComponent } from './report-prp-session-count/report-prp-session-count.component';
import { ReportPrpSessionBillingComponent } from './report-prp-session-billing/report-prp-session-billing.component';


@NgModule({
  declarations: [
    ReportSessionComponent,
    ReportSessionByWeekComponent,
    ReportSessionByWeek2Component,
    ReportSessionRecievedComponent,
    ReportCalenderSessionComponent,
    ReportPrpSessionComponent,
    ReportPrpSessionCountComponent,
    ReportPrpSessionBillingComponent
  ],
  imports: [
    CommonModule,
    ReportSessionRoutingModule,
    NgxDatatableModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[ReportSessionComponent,
    ReportSessionByWeekComponent,
    ReportSessionByWeek2Component,
    ReportSessionRecievedComponent,
    ReportCalenderSessionComponent,
    ReportPrpSessionComponent,
    ReportPrpSessionCountComponent,
    ReportPrpSessionBillingComponent
  ]
})
export class ReportSessionModule { }
