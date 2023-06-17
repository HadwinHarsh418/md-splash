import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientComponent } from './client/client.component';
import { DemodraphicsDetailsComponent } from './demodraphics-details/demodraphics-details.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { NewClientComponent } from './new-client/new-client.component';

const routes: Routes = [
  {path: '', component:ClientComponent},
  {path: 'add-client', component:NewClientComponent},
  // {path: 'clientDtail', component:ClientDetailsComponent},
  {path:'demographics',component:DemodraphicsDetailsComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'insurance/:id',component:InsuranceComponent},
  {path:'assignments',component:AssignmentsComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
