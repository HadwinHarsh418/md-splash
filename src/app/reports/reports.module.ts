import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportClientModule } from './report-client/report-client.module';
import { CsmModule } from './csm/csm.module';
import { ReportSessionModule } from './report-session/report-session.module';
import { ReportsProviderModule } from "./reports-provider/reports-provider.module";
import { ReportsPayrollModule } from "./reports-payroll/reports-payroll.module";
import { ComplianceModule } from "./compliance/compliance.module";
import { ManagmentModule } from "./managment/managment.module";


@NgModule({
    declarations: [
        ReportsComponent,
    ],
    imports: [
        CommonModule,
        ReportsRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule,
        NgbAccordionModule,
        ReportClientModule,
        CsmModule,
        ReportSessionModule,
        ReportsProviderModule,
        ReportsPayrollModule,
        ComplianceModule,
        ManagmentModule
    ]
})
export class ReportsModule { }
