import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { COMMERCIALASSESSMENTRoutingModule } from './commercialassessment-routing.module';
import { COMMERCIALASSESSMENTComponent } from './commercialassessment/commercialassessment.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClientRoutingModule } from 'src/app/client/client-routing.module';
import { ClientModule } from 'src/app/client/client.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PaginationModule } from 'src/app/pagination/pagination.module';
import { GeneralinformationComponent } from './generalinformation/generalinformation.component';
import { RiskAssessmentComponent } from './risk-assessment/risk-assessment.component';
import { SignatureComponent } from './signature/signature.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';


@NgModule({
  declarations: [
    COMMERCIALASSESSMENTComponent,
    GeneralinformationComponent,
    RiskAssessmentComponent,
    SignatureComponent,
    DiagnosisComponent
  ],
  imports: [
    CommonModule,
    COMMERCIALASSESSMENTRoutingModule,
    NgbModule,
    NgxDatatableModule,
    DragDropModule,
    PaginationModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ClientModule,
    ComponentsModule,
  ],
  exports:[
    COMMERCIALASSESSMENTComponent,
    GeneralinformationComponent,
    RiskAssessmentComponent,
    SignatureComponent,
    DiagnosisComponent
  ]
})
export class COMMERCIALASSESSMENTModule { }
