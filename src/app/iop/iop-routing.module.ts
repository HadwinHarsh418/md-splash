import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IopComponent } from './iop/iop.component';

const routes: Routes = [
  {path:'',component:IopComponent},
  {
    path: 'PsychiatricAssessment',
    loadChildren: () => import('./psychiatric-assessment/psychiatric-assessment.module').then(m => m.PsychiatricAssessmentModule)
  },
  {
    path: 'PsycosocialAssessment',
    loadChildren: () => import('./psycosocial-assessment/psycosocial-assessment.module').then(m => m.PsycosocialAssessmentModule)
  },
  {
    path: 'commercialassessment',
    loadChildren: () => import('./commercialassessment/commercialassessment.module').then(m => m.COMMERCIALASSESSMENTModule)
  },
  {
    path: 'monthlysummary',
    loadChildren: () => import('./monthly-summary/monthly-summary.module').then(m => m.MonthlySummaryModule)
  },
  {
    path: 'gapNotes',
    loadChildren: () => import('./iop-gap-notes/iop-gap-notes.module').then(m => m.IopGapNotesModule)
  },

////////////////////////Notes module routing starts/////////////////////////

  {
    path: 'progressNotes/:id',
    loadChildren: () => import('../notes/progress-note/progress-note.module').then(m => m.ProgressNoteModule)
  },
  {
    path: 'IndivisualTreatment/:id',
    loadChildren: () => import('../notes/indivisual-treatment/indivisual-treatment.module').then(m => m.IndivisualTreatmentModule)
  },
  {
    path: 'Transition',
    loadChildren: () => import('../notes/transition-summary/transition-summary.module').then(m => m.TransitionSummaryModule)
  },
  {
    path: 'DischargedSummary',
    loadChildren: () => import('../notes/discharge-sumaary/discharge-sumaary.module').then(m => m.DischargeSumaaryModule)
  },
  {
    path: 'DischargedSummary/:id',
    loadChildren: () => import('../notes/discharge-sumaary/discharge-sumaary.module').then(m => m.DischargeSumaaryModule)
  },
  {
    path: 'psychiatricProgressNotes/:id',
    loadChildren: () => import('../notes/psychiatric-progress-note/psychiatric-progress-note.module').then(m => m.PsychiatricProgressNoteModule)
  },
  {
    path: 'PsychiatricAssessment',
    loadChildren: () => import('../notes/psychiatric-assessment/psychiatric-assessment.module').then(m => m.PsychiatricAssessmentModule)
  },
  // {
  //   path: 'AdultDiagnosis',
  //   loadChildren: () => import('./adult-diagnosis-assesment/adult-diagnosis-assesment.module').then(m => m.AdultDiagnosisAssesmentModule)
  // },
  {
    path: 'SuicideRiskAssessment',
    loadChildren: () => import('../notes/suicide-risk-assessment/suicide-risk-assessment.module').then(m => m.SuicideRiskAssessmentModule)
  },
    {
      path: 'Childandadolescentdischarge',
    loadChildren: () => import('../notes/childandadolescentdischarge/childandadolescentdischarge.module').then(m => m.ChildandadolescentdischargeModule)
  },
  {
    path: 'criticalincidentreport',
    loadChildren: () => import('../notes/criticalincidentreport/criticalincidentreport.module').then(m => m.CriticalincidentreportModule)
  },
  // {
  //   path: 'commercialassessment',
  //   loadChildren: () => import('./commercialassessment/commercialassessment.module').then(m => m.COMMERCIALASSESSMENTModule)
  // },
  {
    path: 'GroupNotes/:id',
  loadChildren: () => import('../notes/group-notes/group-notes.module').then(m => m.GroupNotesModule)
  },
  // {
  //   path: 'therapistcounselor',
  //   loadChildren: () => import('./therapist-counselor/therapist-counselor.module').then(m => m.TherapistCounselorModule)
  // },
  // {
  //   path: 'childadolescentdiagnostic',
  //   loadChildren: () => import('./childadolescentdiagnostic/childadolescentdiagnostic.module').then(m => m.CHILDADOLESCENTDIAGNOSTICModule)
  // },
  // {
  //   path: 'LucasIndividualizedTreatment',
  //   loadChildren: () => import('./lucas-individualized-treatment/lucas-individualized-treatment.module').then(m => m.LucasIndividualizedTreatmentModule)
  // },
  // {
  //   path: 'casemanagementprogressnote',
  //   loadChildren: () => import('./case-management-progress-note/case-management-progress-note.module').then(m => m.CaseManagementProgressNoteModule)
  // },
  // {
  //   path: 'adultdiagnosisassessment',
  //   loadChildren: () => import('./adult-diagnosis-assesment/adult-diagnosis-assesment.module').then(m => m.AdultDiagnosisAssesmentModule)
  // },
  {
    path: 'dast',
    loadChildren: () => import('../notes/dast/dast.module').then(m => m.DastModule)
  },
  {
    path: 'cageAid',
    loadChildren: () => import('../notes/cage-aid/cage-aid.module').then(m => m.CageAidModule)
  },
  {
    path: 'dischargeInfoSheet',
    loadChildren: () => import('../notes/discharge-info-sheet/discharge-info-sheet.module').then(m => m.DischargeInfoSheetModule)
  },
  {
    path: 'dischargeInfoSheet/:id',
    loadChildren: () => import('../notes/discharge-info-sheet/discharge-info-sheet.module').then(m => m.DischargeInfoSheetModule)
  },
  {
    path: 'childAdolescentQues',
    loadChildren: () => import('../notes/child-adolescent-ques/child-adolescent-ques.module').then(m => m.ChildAdolescentQuesModule)
  },
  {
    path: 'adultQues',
    loadChildren: () => import('../notes/adult-ques/adult-ques.module').then(m => m.AdultQuesModule)
  },
  {
    path: 'adultDischargeForm',
    loadChildren: () => import('../notes/adult-discharge-form/adult-discharge-form.module').then(m => m.AdultDischargeFormModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IopRoutingModule { }
