import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsPayrollRoutingModule } from './reports-payroll-routing.module';
import { SessionRecievedComponent } from './session-recieved/session-recieved.component';
import { AnnualSessionCountComponent } from './annual-session-count/annual-session-count.component';
import { AnnualSessionCountPayComponent } from './annual-session-count-pay/annual-session-count-pay.component';
import { MobileTreatmentSessionRecievedComponent } from './mobile-treatment-session-recieved/mobile-treatment-session-recieved.component';
import { SessionCountComponent } from './session-count/session-count.component';
import { MobileTreatmentSessionCountComponent } from './mobile-treatment-session-count/mobile-treatment-session-count.component';
import { MobileTreatmentAnnualSessionCountComponent } from './mobile-treatment-annual-session-count/mobile-treatment-annual-session-count.component';
import { IopAnnualSessionCountComponent } from './iop-annual-session-count/iop-annual-session-count.component';
import { IopSessionCountComponent } from './iop-session-count/iop-session-count.component';
import { IopSessionReceivedComponent } from './iop-session-received/iop-session-received.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    SessionRecievedComponent,
    AnnualSessionCountComponent,
    AnnualSessionCountPayComponent,
    MobileTreatmentSessionRecievedComponent,
    SessionCountComponent,
    MobileTreatmentSessionCountComponent,
    MobileTreatmentAnnualSessionCountComponent,
    IopAnnualSessionCountComponent,
    IopSessionCountComponent,
    IopSessionReceivedComponent

  ],
  imports: [
    CommonModule,
    ReportsPayrollRoutingModule,
    NgxDatatableModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    SessionRecievedComponent,
    AnnualSessionCountComponent,
    AnnualSessionCountPayComponent,
    MobileTreatmentSessionRecievedComponent,
    SessionCountComponent,
    MobileTreatmentSessionCountComponent,
    MobileTreatmentAnnualSessionCountComponent,
    IopAnnualSessionCountComponent,
    IopSessionCountComponent,
    IopSessionReceivedComponent
  ]
})
export class ReportsPayrollModule { }
