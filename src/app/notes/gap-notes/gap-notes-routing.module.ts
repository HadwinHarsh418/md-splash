import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GapNotesComponent } from './gap-notes.component';

const routes: Routes = [
  {path:'',component:GapNotesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GapNotesRoutingModule { }
