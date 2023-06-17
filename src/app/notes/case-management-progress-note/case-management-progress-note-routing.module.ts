import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from 'src/app/client/client/client.component';
import { ManagementProgressNoteComponent } from './management-progress-note/management-progress-note.component';

const routes: Routes = [
  {
    path:'',
    component:ManagementProgressNoteComponent
  },
  {
    path:'client',
    component:ClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseManagementProgressNoteRoutingModule { }
