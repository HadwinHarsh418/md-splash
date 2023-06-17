import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IopGapNotesRoutingModule } from './iop-gap-notes-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IopGapNotesComponent } from './iop-gap-notes.component';


@NgModule({
  declarations: [
    IopGapNotesComponent
  ],
  imports: [
    CommonModule,
    IopGapNotesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class IopGapNotesModule { }
