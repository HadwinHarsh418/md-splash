import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IopGapNotesComponent } from './iop-gap-notes.component';

const routes: Routes = [
  {
    path:'',
    component:IopGapNotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IopGapNotesRoutingModule { }
