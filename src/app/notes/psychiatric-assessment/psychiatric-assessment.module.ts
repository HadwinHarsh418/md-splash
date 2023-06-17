import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychiatricAssessmentRoutingModule } from './psychiatric-assessment-routing.module';
import { PsychiatricAssessmentComponent } from './psychiatric-assessment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RiskAssessmentComponent } from './risk-assessment/risk-assessment.component';
import { MentalStatusComponent } from './mental-status/mental-status.component';
import { HxComponent } from './hx/hx.component';
import { SubstanceAssessmentComponent } from './substance-assessment/substance-assessment.component';
import { SignatureComponent } from './signature/signature.component';
import { TreatmentPlanComponent } from './treatment-plan/treatment-plan.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';


@NgModule({
  declarations: [
    PsychiatricAssessmentComponent,
    RiskAssessmentComponent,
    MentalStatusComponent,
    HxComponent,
    SubstanceAssessmentComponent,
    SignatureComponent,
    TreatmentPlanComponent,
    DiagnosisComponent
  ],
  imports: [
    CommonModule,
    PsychiatricAssessmentRoutingModule,
    ReactiveFormsModule,
    NgbModule,

  ],
  exports:[
    PsychiatricAssessmentComponent,
    RiskAssessmentComponent,
    MentalStatusComponent,
    HxComponent,
    SubstanceAssessmentComponent,
    SignatureComponent,
    TreatmentPlanComponent,
    DiagnosisComponent
  ]
})
export class PsychiatricAssessmentModule { }
