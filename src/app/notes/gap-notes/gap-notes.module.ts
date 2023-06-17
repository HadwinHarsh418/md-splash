import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GapNotesRoutingModule } from './gap-notes-routing.module';
import { GapNotesComponent } from './gap-notes.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GapNotesComponent
  ],
  imports: [
    CommonModule,
    GapNotesRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    GapNotesComponent
  ]
})
export class GapNotesModule { }
