import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychiatricProgressNoteRoutingModule } from './psychiatric-progress-note-routing.module';
import { PsychiatricProgressNoteComponent } from './psychiatric-progress-note/psychiatric-progress-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PsychiatricProgressNoteComponent
  ],
  imports: [
    CommonModule,
    PsychiatricProgressNoteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[PsychiatricProgressNoteComponent]
})
export class PsychiatricProgressNoteModule { }
