import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DcSummaryNoteRoutingModule } from './dc-summary-note-routing.module';
import { DcSummaryNoteComponent } from './dc-summary-note/dc-summary-note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from 'src/app/components/components.module';
import { GeneralComponent } from './general/general.component';
import { RehabServiceComponent } from './rehab-service/rehab-service.component';
import { ContinueServiceComponent } from './continue-service/continue-service.component';


@NgModule({
  declarations: [
    DcSummaryNoteComponent,
    GeneralComponent,
    RehabServiceComponent,
    ContinueServiceComponent
  ],
  imports: [
    CommonModule,
    DcSummaryNoteRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    ComponentsModule,
  ]
})
export class DcSummaryNoteModule { }
