import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsmRoutingModule } from './csm-routing.module';
import { CsmDetailComponent } from './csm-detail/csm-detail.component';
import { CsmTreatmentComponent } from './csm-treatment/csm-treatment.component';
import { CsmMobileTreatmentComponent } from './csm-mobile-treatment/csm-mobile-treatment.component';
import { CsmIopComponent } from './csm-iop/csm-iop.component';
import { ReferalResourceComponent } from './referal-resource/referal-resource.component';
import { IntakeTrackerComponent } from './intake-tracker/intake-tracker.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CsmDetailComponent,
    CsmTreatmentComponent,
    CsmMobileTreatmentComponent,
    CsmIopComponent,
    ReferalResourceComponent,
    IntakeTrackerComponent
  ],
  imports: [
    CommonModule,
    CsmRoutingModule,
    NgxDatatableModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    CsmDetailComponent,
    CsmTreatmentComponent,
    CsmMobileTreatmentComponent,
    CsmIopComponent,
    ReferalResourceComponent,
    IntakeTrackerComponent
  ]
})
export class CsmModule { }
