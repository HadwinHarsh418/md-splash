
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes/notes.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PsychosocialAssessmentModule } from './notes/psychosocial-assessment/psychosocial-assessment.module';
import { IndivisualTreatmentModule } from './indivisual-treatment/indivisual-treatment.module';
import { GroupNotesModule } from './group-notes/group-notes.module';
import { DischargeSumaaryModule } from './discharge-sumaary/discharge-sumaary.module';
import { ChildandadolescentdischargeModule } from './childandadolescentdischarge/childandadolescentdischarge.module';
import { CriticalincidentreportModule } from './criticalincidentreport/criticalincidentreport.module';
import { COMMERCIALASSESSMENTModule } from './commercialassessment/commercialassessment.module';
import { TherapistCounselorModule } from './therapist-counselor/therapist-counselor.module';
import { CaseManagementProgressNoteModule } from './case-management-progress-note/case-management-progress-note.module';
import { AdultDiagnosisAssesmentModule } from './adult-diagnosis-assesment/adult-diagnosis-assesment.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    NotesComponent,
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    IndivisualTreatmentModule,
    GroupNotesModule,
    DischargeSumaaryModule,
    ChildandadolescentdischargeModule,
    CriticalincidentreportModule,
    COMMERCIALASSESSMENTModule,
    TherapistCounselorModule,
    CaseManagementProgressNoteModule,
    AdultDiagnosisAssesmentModule,
    HttpClientModule
  ],
  exports:[
    PsychosocialAssessmentModule
  ]
})
export class NotesModule { }
