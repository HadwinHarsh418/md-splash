import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupNotesComponent } from './group-notes.component';

const routes: Routes = [
  {path:'',component:GroupNotesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupNotesRoutingModule { }
