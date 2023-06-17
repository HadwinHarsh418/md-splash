import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriticalincidentreportRoutingModule } from './criticalincidentreport-routing.module';
import { CriticalincidentreportComponent } from './criticalincidentreport/criticalincidentreport.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClientRoutingModule } from 'src/app/client/client-routing.module';
import { ClientModule } from 'src/app/client/client.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PaginationModule } from 'src/app/pagination/pagination.module';
import { ClientdetailComponent } from './clientdetail/clientdetail.component';


@NgModule({
  declarations: [
    CriticalincidentreportComponent,
    ClientdetailComponent
  ],
  imports: [
    CommonModule,
    CriticalincidentreportRoutingModule,
    NgbModule,
    NgxDatatableModule,
    DragDropModule,
    PaginationModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ClientModule,
    ComponentsModule
  ],
  exports:[
    CriticalincidentreportComponent,
    ClientdetailComponent
  ]
})
export class CriticalincidentreportModule { }
