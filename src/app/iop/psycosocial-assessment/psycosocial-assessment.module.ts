import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsycosocialAssessmentRoutingModule } from './psycosocial-assessment-routing.module';
import { IopPsycosocialGeneralComponent } from './iop-psycosocial-general/iop-psycosocial-general.component';
import { IopPsycosocialDiagnosisComponent } from './iop-psycosocial-diagnosis/iop-psycosocial-diagnosis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PsychosocialAssessmentModule } from 'src/app/notes/notes/psychosocial-assessment/psychosocial-assessment.module';


@NgModule({
  declarations: [
    IopPsycosocialGeneralComponent,
    IopPsycosocialDiagnosisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PsycosocialAssessmentRoutingModule,
    PsychosocialAssessmentModule
  ],exports:[
    IopPsycosocialGeneralComponent,
    IopPsycosocialDiagnosisComponent
  ]
})
export class PsycosocialAssessmentModule { }
