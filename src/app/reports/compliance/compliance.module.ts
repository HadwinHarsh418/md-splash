import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplianceRoutingModule } from './compliance-routing.module';
import { TreatmentPlansPastComponent } from './treatment-plans-past/treatment-plans-past.component';
import { IrpTreatmentPlansPastComponent } from './irp-treatment-plans-past/irp-treatment-plans-past.component';
import { MobileTreatmentPlansPastComponent } from './mobile-treatment-plans-past/mobile-treatment-plans-past.component';
import { IopPlansPastComponent } from './iop-plans-past/iop-plans-past.component';
import { UnsignedNotesComponent } from './unsigned-notes/unsigned-notes.component';
import { UnsignedMobileTreatmentComponent } from './unsigned-mobile-treatment/unsigned-mobile-treatment.component';
import { UnsignedIopNotesComponent } from './unsigned-iop-notes/unsigned-iop-notes.component';
import { UnsignedSesssionReceivedComponent } from './unsigned-sesssion-received/unsigned-sesssion-received.component';
import { UnsignedMobileTreatmentSesssionReceivedComponent } from './unsigned-mobile-treatment-sesssion-received/unsigned-mobile-treatment-sesssion-received.component';
import { UnsignedIopSesssionReceivedComponent } from './unsigned-iop-sesssion-received/unsigned-iop-sesssion-received.component';
import { UnsignedNotesBySupervisorComponent } from './unsigned-notes-by-supervisor/unsigned-notes-by-supervisor.component';
import { PrpUnsignedNotesByClinicianComponent } from './prp-unsigned-notes-by-clinician/prp-unsigned-notes-by-clinician.component';
import { PrpUnsignedNotesBySupervisorComponent } from './prp-unsigned-notes-by-supervisor/prp-unsigned-notes-by-supervisor.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TreatmentPlansPastComponent,
    IrpTreatmentPlansPastComponent,
    MobileTreatmentPlansPastComponent,
    IopPlansPastComponent,
    UnsignedNotesComponent,
    UnsignedMobileTreatmentComponent,
    UnsignedIopNotesComponent,
    UnsignedSesssionReceivedComponent,
    UnsignedMobileTreatmentSesssionReceivedComponent,
    UnsignedIopSesssionReceivedComponent,
    UnsignedNotesBySupervisorComponent,
    PrpUnsignedNotesByClinicianComponent,
    PrpUnsignedNotesBySupervisorComponent
  ],
  imports: [
    CommonModule,
    ComplianceRoutingModule,
    NgxDatatableModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    TreatmentPlansPastComponent,
    IrpTreatmentPlansPastComponent,
    MobileTreatmentPlansPastComponent,
    IopPlansPastComponent,
    UnsignedNotesComponent,
    UnsignedMobileTreatmentComponent,
    UnsignedIopNotesComponent,
    UnsignedSesssionReceivedComponent,
    UnsignedMobileTreatmentSesssionReceivedComponent,
    UnsignedIopSesssionReceivedComponent,
    UnsignedNotesBySupervisorComponent,
    PrpUnsignedNotesByClinicianComponent,
    PrpUnsignedNotesBySupervisorComponent
  ]
})
export class ComplianceModule { }
