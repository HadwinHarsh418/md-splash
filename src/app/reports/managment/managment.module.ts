import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagmentRoutingModule } from './managment-routing.module';
import { ClientIntakeComponent } from './client-intake/client-intake.component';
import { ExpiringAssessmentsComponent } from './expiring-assessments/expiring-assessments.component';
import { ExpiringAuthorizationsComponent } from './expiring-authorizations/expiring-authorizations.component';
import { PrpExpiringAuthorizationsComponent } from './prp-expiring-authorizations/prp-expiring-authorizations.component';
import { MobileTreatmentExpiringAuthorizationsComponent } from './mobile-treatment-expiring-authorizations/mobile-treatment-expiring-authorizations.component';
import { IopExpiringAuthorizationsComponent } from './iop-expiring-authorizations/iop-expiring-authorizations.component';
import { LockedAccountsComponent } from './locked-accounts/locked-accounts.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UpcomingTreatmentPlanComponent } from './upcoming-treatment-plan/upcoming-treatment-plan.component';
import { UpcomingMobileTreatmentPlanComponent } from './upcoming-mobile-treatment-plan/upcoming-mobile-treatment-plan.component';
import { UpcomingIopPlanComponent } from './upcoming-iop-plan/upcoming-iop-plan.component';
import { UpcomingIrpComponent } from './upcoming-irp/upcoming-irp.component';
import { SupervisorAssessmentsComponent } from './supervisor-assessments/supervisor-assessments.component';
import { ClientServiceComponent } from './client-service/client-service.component';
import { ServiceCountReportComponent } from './service-count-report/service-count-report.component';
import { FlagsBySupervisorComponent } from './flags-by-supervisor/flags-by-supervisor.component';
import { ProFlagsBySupervisorComponent } from './pro-flags-by-supervisor/pro-flags-by-supervisor.component';
import { MobileFlagsBySupervisorComponent } from './mobile-flags-by-supervisor/mobile-flags-by-supervisor.component';
import { IopFlagsBySupervisorComponent } from './iop-flags-by-supervisor/iop-flags-by-supervisor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    ClientIntakeComponent,
    ExpiringAssessmentsComponent,
    ExpiringAuthorizationsComponent,
    PrpExpiringAuthorizationsComponent,
    MobileTreatmentExpiringAuthorizationsComponent,
    IopExpiringAuthorizationsComponent,
    LockedAccountsComponent,
    UserAccountComponent,
    UpcomingTreatmentPlanComponent,
    UpcomingMobileTreatmentPlanComponent,
    UpcomingIopPlanComponent,
    UpcomingIrpComponent,
    SupervisorAssessmentsComponent,
    ClientServiceComponent,
    ServiceCountReportComponent,
    FlagsBySupervisorComponent,
    ProFlagsBySupervisorComponent,
    MobileFlagsBySupervisorComponent,
    IopFlagsBySupervisorComponent
  ],
  imports: [
    CommonModule,
    ManagmentRoutingModule,
    NgxDatatableModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[ClientIntakeComponent,
    ExpiringAssessmentsComponent,
    ExpiringAuthorizationsComponent,
    PrpExpiringAuthorizationsComponent,
    MobileTreatmentExpiringAuthorizationsComponent,
    IopExpiringAuthorizationsComponent,
    LockedAccountsComponent,
    UserAccountComponent,
    UpcomingTreatmentPlanComponent,
    UpcomingMobileTreatmentPlanComponent,
    UpcomingIopPlanComponent,
    UpcomingIrpComponent,
    SupervisorAssessmentsComponent,
    ClientServiceComponent,
    ServiceCountReportComponent,
    FlagsBySupervisorComponent,
    ProFlagsBySupervisorComponent,
    MobileFlagsBySupervisorComponent,
    IopFlagsBySupervisorComponent
  
  ]
})
export class ManagmentModule { }
