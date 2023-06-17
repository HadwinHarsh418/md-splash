import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsychiatricProgressNoteComponent } from './psychiatric-progress-note/psychiatric-progress-note.component';

const routes: Routes = [
  {path:'',component:PsychiatricProgressNoteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsychiatricProgressNoteRoutingModule { }
