import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DcSummaryNoteComponent } from './dc-summary-note/dc-summary-note.component';

const routes: Routes = [
  {path:'',component:DcSummaryNoteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DcSummaryNoteRoutingModule { }
