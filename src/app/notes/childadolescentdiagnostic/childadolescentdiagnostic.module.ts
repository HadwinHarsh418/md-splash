import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CHILDADOLESCENTDIAGNOSTICRoutingModule } from './childadolescentdiagnostic-routing.module';
import { ChildadolescentdiagnosticComponent } from './childadolescentdiagnostic/childadolescentdiagnostic.component';
import { ProblemChecklistComponent } from './problem-checklist/problem-checklist.component';
import { LegalHistoryComponent } from './legal-history/legal-history.component';
import { CurrentSupportsComponent } from './current-supports/current-supports.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClientRoutingModule } from 'src/app/client/client-routing.module';
import { ClientModule } from 'src/app/client/client.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PaginationModule } from 'src/app/pagination/pagination.module';
import { AdultDiagnosisAssesmentModule } from '../adult-diagnosis-assesment/adult-diagnosis-assesment.module';
import { MentalHealthComponent } from './mental-health/mental-health.component';


@NgModule({
  declarations: [
    ChildadolescentdiagnosticComponent,
    ProblemChecklistComponent,
    LegalHistoryComponent,
    MentalHealthComponent,
    CurrentSupportsComponent
  ],
  imports: [
    CommonModule,
    CHILDADOLESCENTDIAGNOSTICRoutingModule,
    NgbModule,
    NgxDatatableModule,
    DragDropModule,
    PaginationModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ClientModule,
    ComponentsModule,
    AdultDiagnosisAssesmentModule
  ]
})
export class CHILDADOLESCENTDIAGNOSTICModule { }
