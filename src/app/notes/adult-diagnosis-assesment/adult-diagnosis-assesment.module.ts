import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdultDiagnosisAssesmentRoutingModule } from './adult-diagnosis-assesment-routing.module';
import { AdultDiagnosisAssesmentComponent } from './adult-diagnosis-assesment/adult-diagnosis-assesment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrentSupportComponent } from './current-support/current-support.component';
import { LegalHistoryComponent } from './legal-history/legal-history.component';
import { AlcholUseComponent } from './alchol-use/alchol-use.component';
import { ProblemCheckComponent } from './problem-check/problem-check.component';
import { ClinicalSummaryComponent } from './clinical-summary/clinical-summary.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClientRoutingModule } from 'src/app/client/client-routing.module';
import { ClientModule } from 'src/app/client/client.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PaginationModule } from 'src/app/pagination/pagination.module';


@NgModule({
  declarations: [
    AdultDiagnosisAssesmentComponent,
    CurrentSupportComponent,
    LegalHistoryComponent,
    AlcholUseComponent,
    ProblemCheckComponent,
    ClinicalSummaryComponent
  ],
  imports: [
    CommonModule,
    AdultDiagnosisAssesmentRoutingModule,
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
    ClinicalSummaryComponent
  ]
})
export class AdultDiagnosisAssesmentModule { }
