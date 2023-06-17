import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrativeIncorectLoginTracksComponent } from './administrative-incorect-login-tracks.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [
    AdministrativeIncorectLoginTracksComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,

  ],
  exports:[
    AdministrativeIncorectLoginTracksComponent
  ]
})
export class AdministrativeIncorectLoginTracksModule { }
