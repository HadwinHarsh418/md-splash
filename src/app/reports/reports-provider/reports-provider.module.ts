import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsProviderRoutingModule } from './reports-provider-routing.module';
import { AssignmentComponent } from './assignment/assignment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PrpAssignmentComponent } from './prp-assignment/prp-assignment.component';
import { MobileTreatmentAssignmentComponent } from './mobile-treatment-assignment/mobile-treatment-assignment.component';


@NgModule({
  declarations: [
    AssignmentComponent,
    PrpAssignmentComponent,
    MobileTreatmentAssignmentComponent
  ],
  imports: [
    CommonModule,
    ReportsProviderRoutingModule,
    NgxDatatableModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    AssignmentComponent,
    PrpAssignmentComponent,
    MobileTreatmentAssignmentComponent,
  ]
})
export class ReportsProviderModule { }
