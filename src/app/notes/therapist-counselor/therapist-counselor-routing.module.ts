import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from 'src/app/client/client/client.component';
import { TherapistcounselorComponent } from './therapistcounselor/therapistcounselor.component';

const routes: Routes = [
  {
    path:'',
    component:TherapistcounselorComponent
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
export class TherapistCounselorRoutingModule { }
