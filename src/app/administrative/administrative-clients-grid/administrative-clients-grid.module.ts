import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrativeClientsGridComponent } from '../administrative-clients-grid/administrative-clients-grid.component';
import { RouterModule, Routes } from '@angular/router';
import { AdministrativeClientsInfoComponent } from '../administrative-clients/administrative-clients-info/administrative-clients-info.component';
import { AdministrativeClientsModule } from '../administrative-clients/administrative-clients.module';

const routes: Routes = [

  {
    path:'edit-client',
    component:AdministrativeClientsInfoComponent
  }
];

@NgModule({
  declarations: [
    AdministrativeClientsGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AdministrativeClientsModule
  ],
  exports:[
    AdministrativeClientsGridComponent
  ]
})
export class AdministrativeClientsGridModule { }
