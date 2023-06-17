import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentsRoutingModule } from './assignments-routing.module';
import { AssignmentsComponent } from './assignments/assignments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AssignmentsComponent
  ],
  imports: [
    CommonModule,
    AssignmentsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    NgbModule
  ]
})
export class AssignmentsModule { }
