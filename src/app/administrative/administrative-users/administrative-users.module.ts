import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrativeUsersComponent } from './administrative-users.component';
import { AdministrativeUserInfoComponent } from './administrative-user-info/administrative-user-info.component';



@NgModule({
  declarations: [
    AdministrativeUsersComponent,
    AdministrativeUserInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AdministrativeUsersComponent,
    AdministrativeUserInfoComponent
  ]
})
export class AdministrativeUsersModule { }
