import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisMindRoutingModule } from './crisis-mind-routing.module';
import { MobileResponseReportComponent } from './mobile-response-report/mobile-response-report.component';
import { InitialElectronicComponent } from './initial-electronic/initial-electronic.component';
import { CommunityTragedyComponent } from './community-tragedy/community-tragedy.component';
import { CaseClosureComponent } from './case-closure/case-closure.component';
import { CommunityConcernComponent } from './community-concern/community-concern.component';
import { BriefDiagnosticComponent } from './brief-diagnostic/brief-diagnostic.component';
import { CallDataComponent } from './call-data/call-data.component';
import { CrisisFollowUpComponent } from './crisis-follow-up/crisis-follow-up.component';
import { EndOfShiftComponent } from './end-of-shift/end-of-shift.component';
import { ImindreferralComponent } from './imindreferral/imindreferral.component';
import { PhoneResponseReportComponent } from './phone-response-report/phone-response-report.component';
import { CrisisMindMtcComponent } from './crisis-mind-mtc/crisis-mind-mtc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MobileResponseReportComponent,
    InitialElectronicComponent,
    CommunityTragedyComponent,
    CaseClosureComponent,
    CommunityConcernComponent,
    BriefDiagnosticComponent,
    CallDataComponent,
    CrisisFollowUpComponent,
    EndOfShiftComponent,
    ImindreferralComponent,
    PhoneResponseReportComponent,
    CrisisMindMtcComponent,
  ],
  imports: [
    CommonModule,
    CrisisMindRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class CrisisMindModule { }
