import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingreportRoutingModule } from './billingreport-routing.module';
import { InsuranceAgingReportProvidersComponent } from './insurance-aging-report-providers/insurance-aging-report-providers.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { InsuranceAgingReportComponent } from './insurance-aging-report/insurance-aging-report.component';
import { AgingReportDetailComponent } from './aging-report-detail/aging-report-detail.component';
import { IncomeReportDetailByClientComponent } from './income-report-detail-by-client/income-report-detail-by-client.component';
import { PaymentReportsComponent } from './payment-reports/payment-reports.component';
import { IncomeReportDetailComponent } from './income-report-detail/income-report-detail.component';


@NgModule({
  declarations: [
    InsuranceAgingReportProvidersComponent,
    InsuranceAgingReportComponent,
    AgingReportDetailComponent,
    IncomeReportDetailByClientComponent,
    PaymentReportsComponent,
    IncomeReportDetailComponent
  ],
  imports: [
    CommonModule,
    BillingreportRoutingModule,
    NgxDatatableModule
  ],
  exports:[InsuranceAgingReportProvidersComponent,InsuranceAgingReportComponent,
    AgingReportDetailComponent,IncomeReportDetailByClientComponent,
    PaymentReportsComponent,
  IncomeReportDetailComponent]
})
export class BillingreportModule { }
