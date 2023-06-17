import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrativeClientsComponent } from './administrative-clients.component';
import { AdministrativeClientsInfoComponent } from './administrative-clients-info/administrative-clients-info.component';



@NgModule({
  declarations: [
    AdministrativeClientsComponent,
    AdministrativeClientsInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AdministrativeClientsComponent,
    AdministrativeClientsInfoComponent
  ]
})
export class AdministrativeClientsModule { }
