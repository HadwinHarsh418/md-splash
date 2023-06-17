import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrpNotesRoutingModule } from './prp-notes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PrpContactComponent } from './prp-contact/prp-contact.component';
import { IrpReviewComponent } from './irp-review/irp-review.component';
import { MonthlySummaryComponent } from './monthly-summary/monthly-summary.component';
import { GroupNotesModule } from '../notes/group-notes/group-notes.module';
import { COLLATERALNOTEComponent } from './collateralnote/collateralnote.component';
import { PRPCOLLABORATIONNOTEComponent } from './prpcollaborationnote/prpcollaborationnote.component';


@NgModule({
  declarations: [
    PrpContactComponent,
    PrpContactComponent,
    MonthlySummaryComponent,
    COLLATERALNOTEComponent,
    PRPCOLLABORATIONNOTEComponent
  ],
  imports: [
    CommonModule,
    PrpNotesRoutingModule,
    ReactiveFormsModule,
    GroupNotesModule
  ]
})
export class PrpNotesModule { }
