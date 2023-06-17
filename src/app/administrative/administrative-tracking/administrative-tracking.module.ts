import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrativeTrackingComponent } from './administrative-tracking.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [
    AdministrativeTrackingComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  exports:[
    AdministrativeTrackingComponent
  ]
})
export class AdministrativeTrackingModule { }
