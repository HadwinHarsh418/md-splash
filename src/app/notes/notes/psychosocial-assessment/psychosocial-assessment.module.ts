import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PsychosocialAssessmentComponent } from './psychosocial-assessment/psychosocial-assessment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotesRoutingModule } from '../../notes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { GeneralComponent } from './general/general.component';
import { FamilyComponent } from './family/family.component';
import { HealthMedicalComponent } from './health-medical/health-medical.component';
import { SubstanceComponent } from './substance/substance.component';
import { MentalStatusComponent } from './mental-status/mental-status.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path:'',
    component:PsychosocialAssessmentComponent
  }
]

@NgModule({
  declarations: [
    PsychosocialAssessmentComponent,
    GeneralComponent,
    FamilyComponent,
    HealthMedicalComponent,
    SubstanceComponent,
    MentalStatusComponent,
    AdditionalInfoComponent,
    DiagnosisComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    PsychosocialAssessmentComponent,
    GeneralComponent,
    FamilyComponent,
    HealthMedicalComponent,
    SubstanceComponent,
    MentalStatusComponent,
    DiagnosisComponent
  ],
})
export class PsychosocialAssessmentModule { }
