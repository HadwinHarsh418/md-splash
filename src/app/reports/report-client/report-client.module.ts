import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportClientRoutingModule } from './report-client-routing.module';
import { ReportAllClientComponent } from './report-all-client/report-all-client.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReportClientZipComponent } from './report-client-zip/report-client-zip.component';
import { ReportClientStatusComponent } from './report-client-status/report-client-status.component';
import { ReportunderAgeStatusComponent } from './reportunder-age-status/reportunder-age-status.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportClientPayorComponent } from './report-client-payor/report-client-payor.component';
import { ReportStaffRosterComponent } from './report-staff-roster/report-staff-roster.component';


@NgModule({
  declarations: [
    ReportAllClientComponent,
    ReportClientZipComponent,
    ReportClientStatusComponent,
    ReportunderAgeStatusComponent,
    ReportClientPayorComponent,
    ReportStaffRosterComponent
  ],
  imports: [
    CommonModule,
    ReportClientRoutingModule,
    NgxDatatableModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[ReportAllClientComponent,
    ReportClientZipComponent,
    ReportunderAgeStatusComponent,
    ReportClientStatusComponent,
    ReportClientPayorComponent,
    ReportStaffRosterComponent
  ]
})
export class ReportClientModule { }
