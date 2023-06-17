import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressNoteComponent } from './progress-note.component';

const routes: Routes = [
  {path:'',component:ProgressNoteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressNoteRoutingModule { }
