import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressNoteRoutingModule } from './progress-note-routing.module';
import { ProgressNoteComponent } from '../progress-note/progress-note.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProgressNoteComponent
  ],
  imports: [
    CommonModule,
    ProgressNoteRoutingModule,
    ReactiveFormsModule
  ],
  exports:[ProgressNoteComponent]
})
export class ProgressNoteModule { }
