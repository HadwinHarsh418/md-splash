import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContinuationServicesReferralRoutingModule } from './continuation-services-referral-routing.module';
import { ContinuationServicesReferralComponent } from './continuation-services-referral/continuation-services-referral.component';
import { GeneralComponent } from './general/general.component';
import { GuardianInformationComponent } from './guardian-information/guardian-information.component';
import { DiagnosesComponent } from './diagnoses/diagnoses.component';
import { RehabilitationComponent } from './rehabilitation/rehabilitation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ContinuationServicesReferralComponent,
    GeneralComponent,
    GuardianInformationComponent,
    DiagnosesComponent,
    RehabilitationComponent
  ],
  imports: [
    CommonModule,
    ContinuationServicesReferralRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    ComponentsModule,
  ]
})
export class ContinuationServicesReferralModule { }
