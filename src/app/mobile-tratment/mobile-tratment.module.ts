import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileTratmentRoutingModule } from './mobile-tratment-routing.module';
import { MobileTratmentComponent } from './mobile-tratment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobilePsychiatricAssessmentComponent } from './mobile-psychiatric-assessment/mobile-psychiatric-assessment.component';
import { PsychiatricAssessmentModule } from '../notes/psychiatric-assessment/psychiatric-assessment.module';
import { PsychosocialAssessmentModule } from '../notes/notes/psychosocial-assessment/psychosocial-assessment.module';
import { MobilePsychosocialAssessmentComponent } from './mobile-psychosocial-assessment/mobile-psychosocial-assessment.component';
import { MobilePsychosocialCommercialComponent } from './mobile-psychosocial-commercial/mobile-psychosocial-commercial.component';
import { COMMERCIALASSESSMENTModule } from '../notes/commercialassessment/commercialassessment.module';
import { MobilePsychiatricProgressNoteComponent } from './mobile-psychiatric-progress-note/mobile-psychiatric-progress-note.component';
import { PsychiatricProgressNoteModule } from '../notes/psychiatric-progress-note/psychiatric-progress-note.module';
import { MobileGapNoteComponent } from './mobile-gap-note/mobile-gap-note.component';
import { MobileGroupNoteComponent } from './mobile-group-note/mobile-group-note.component';
import { GapNotesModule } from '../notes/gap-notes/gap-notes.module';
import { GroupNotesModule } from '../notes/group-notes/group-notes.module';
import { IndivisualTreatmentModule } from '../notes/indivisual-treatment/indivisual-treatment.module';
import { MobileIndivisualTreatmentComponent } from './mobile-indivisual-treatment/mobile-indivisual-treatment.component';
import { CageAidModule } from '../notes/cage-aid/cage-aid.module';
import { MobileDastComponent } from './mobile-dast/mobile-dast.component';
import { DastModule } from '../notes/dast/dast.module';
import { MobileDischargeComponent } from './mobile-discharge/mobile-discharge.component';
import { DischargeSumaaryModule } from '../notes/discharge-sumaary/discharge-sumaary.module';
import { MobileTransitionSummaryComponent } from './mobile-transition-summary/mobile-transition-summary.component';
import { TransitionSummaryModule } from '../notes/transition-summary/transition-summary.module';
import { MobileSuicideRiskComponent } from './mobile-suicide-risk/mobile-suicide-risk.component';
import { SuicideRiskAssessmentModule } from '../notes/suicide-risk-assessment/suicide-risk-assessment.module';
import { MobileCriticalincidentReportComponent } from './mobile-criticalincident-report/mobile-criticalincident-report.component';
import { CriticalincidentreportModule } from '../notes/criticalincidentreport/criticalincidentreport.module';
import { MobileBehavioralHealthComponent } from './mobile-behavioral-health/mobile-behavioral-health.component';
import { MobileProgressNoteModule } from './mobile-progress-note/mobile-progress-note.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MobileTratmentComponent,
    MobilePsychiatricAssessmentComponent,
    MobilePsychosocialAssessmentComponent,
    MobilePsychosocialCommercialComponent,
    MobilePsychiatricProgressNoteComponent,
    MobileGapNoteComponent,
    MobileGroupNoteComponent,
    MobileIndivisualTreatmentComponent,
    MobileDastComponent,
    MobileDischargeComponent,
    MobileTransitionSummaryComponent,
    MobileSuicideRiskComponent,
    MobileCriticalincidentReportComponent,
    MobileBehavioralHealthComponent,
  ],
  imports: [
    CommonModule,
    MobileTratmentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    PsychiatricAssessmentModule,
    PsychosocialAssessmentModule,
    COMMERCIALASSESSMENTModule,
    PsychiatricProgressNoteModule,
    GapNotesModule,
    GroupNotesModule,
    IndivisualTreatmentModule,
    CageAidModule,
    DastModule,
    DischargeSumaaryModule,
    TransitionSummaryModule,
    SuicideRiskAssessmentModule,
    CriticalincidentreportModule,
    MobileProgressNoteModule
  ]
})
export class MobileTratmentModule { }
