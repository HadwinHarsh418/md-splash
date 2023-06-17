import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychiatricAssessmentRoutingModule } from './psychiatric-assessment-routing.module';
import { PsychiatricAssessmentComponent } from './psychiatric-assessment/psychiatric-assessment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RiskAssessmentComponent } from './risk-assessment/risk-assessment.component';
import { MentalStatusComponent } from './mental-status/mental-status.component';
import { HxComponent } from './hx/hx.component';
import { SubstanceAssessmentComponent } from './substance-assessment/substance-assessment.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { TreatmentPlanComponent } from './treatment-plan/treatment-plan.component';
import { SignatureComponent } from './signature/signature.component';


@NgModule({
  declarations: [
    PsychiatricAssessmentComponent,
    RiskAssessmentComponent,
    MentalStatusComponent,
    HxComponent,
    SubstanceAssessmentComponent,
    DiagnosisComponent,
    TreatmentPlanComponent,
    SignatureComponent
  ],
  imports: [
    CommonModule,
    PsychiatricAssessmentRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ]
})
export class PsychiatricAssessmentModule { }
