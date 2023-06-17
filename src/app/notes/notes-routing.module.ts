import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { PsychosocialAssessmentComponent } from './notes/psychosocial-assessment/psychosocial-assessment/psychosocial-assessment.component';
// import { PsychosocialAssessmentComponent } from './psychosocial-assessment/psychosocial-assessment.component';

const routes: Routes = [
  { path: '', component: NotesComponent},
  {
    path: 'psychosocial-assessment1',
    loadChildren: () => import('./notes/psychosocial-assessment/psychosocial-assessment.module').then(m => m.PsychosocialAssessmentModule)
  },
  {
    path: 'progressNotes',
    loadChildren: () => import('./progress-note/progress-note.module').then(m => m.ProgressNoteModule)
  },
  {
    path: 'IndivisualTreatment/:id',
    loadChildren: () => import('./indivisual-treatment/indivisual-treatment.module').then(m => m.IndivisualTreatmentModule)
  },
  {
    path: 'GapNotes',
    loadChildren: () => import('./gap-notes/gap-notes.module').then(m => m.GapNotesModule)
  },
  {
    path: 'Transition',
    loadChildren: () => import('./transition-summary/transition-summary.module').then(m => m.TransitionSummaryModule)
  },
  {
    path: 'DischargedSummary',
    loadChildren: () => import('./discharge-sumaary/discharge-sumaary.module').then(m => m.DischargeSumaaryModule)
  },
  {
    path: 'psychiatricProgressNotes/:id',
    loadChildren: () => import('./psychiatric-progress-note/psychiatric-progress-note.module').then(m => m.PsychiatricProgressNoteModule)
  },
  {
    path: 'PsychiatricAssessment',
    loadChildren: () => import('./psychiatric-assessment/psychiatric-assessment.module').then(m => m.PsychiatricAssessmentModule)
  },
  {
    path: 'AdultDiagnosis',
    loadChildren: () => import('./adult-diagnosis-assesment/adult-diagnosis-assesment.module').then(m => m.AdultDiagnosisAssesmentModule)
  },
  {
    path: 'SuicideRiskAssessment',
    loadChildren: () => import('./suicide-risk-assessment/suicide-risk-assessment.module').then(m => m.SuicideRiskAssessmentModule)
  },
    {path: 'Childandadolescentdischarge',
    loadChildren: () => import('./childandadolescentdischarge/childandadolescentdischarge.module').then(m => m.ChildandadolescentdischargeModule)
  },
  {
    path: 'criticalincidentreport',
    loadChildren: () => import('./criticalincidentreport/criticalincidentreport.module').then(m => m.CriticalincidentreportModule)
  }
  ,
  {
    path: 'commercialassessment',
    loadChildren: () => import('./commercialassessment/commercialassessment.module').then(m => m.COMMERCIALASSESSMENTModule)
  },
  {path: 'GroupNotes',
  loadChildren: () => import('./group-notes/group-notes.module').then(m => m.GroupNotesModule)},
  {
    path: 'therapistcounselor',
    loadChildren: () => import('./therapist-counselor/therapist-counselor.module').then(m => m.TherapistCounselorModule)
  },
  {
    path: 'childadolescentdiagnostic',
    loadChildren: () => import('./childadolescentdiagnostic/childadolescentdiagnostic.module').then(m => m.CHILDADOLESCENTDIAGNOSTICModule)
  },
  {
    path: 'LucasIndividualizedTreatment',
    loadChildren: () => import('./lucas-individualized-treatment/lucas-individualized-treatment.module').then(m => m.LucasIndividualizedTreatmentModule)
  },
  {
    path: 'casemanagementprogressnote',
    loadChildren: () => import('./case-management-progress-note/case-management-progress-note.module').then(m => m.CaseManagementProgressNoteModule)
  },
  {
    path: 'adultdiagnosisassessment',
    loadChildren: () => import('./adult-diagnosis-assesment/adult-diagnosis-assesment.module').then(m => m.AdultDiagnosisAssesmentModule)
  },
  {
    path: 'dast',
    loadChildren: () => import('./dast/dast.module').then(m => m.DastModule)
  },
  {
    path: 'cageAid',
    loadChildren: () => import('./cage-aid/cage-aid.module').then(m => m.CageAidModule)
  },
  {
    path: 'dischargeInfoSheet',
    loadChildren: () => import('./discharge-info-sheet/discharge-info-sheet.module').then(m => m.DischargeInfoSheetModule)
  },
  {
    path: 'childAdolescentQues',
    loadChildren: () => import('./child-adolescent-ques/child-adolescent-ques.module').then(m => m.ChildAdolescentQuesModule)
  },
  {
    path: 'adultQues',
    loadChildren: () => import('./adult-ques/adult-ques.module').then(m => m.AdultQuesModule)
  },
  {
    path: 'adultDischargeForm',
    loadChildren: () => import('./adult-discharge-form/adult-discharge-form.module').then(m => m.AdultDischargeFormModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
