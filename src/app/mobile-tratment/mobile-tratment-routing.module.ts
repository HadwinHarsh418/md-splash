import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CageAidComponent } from '../notes/cage-aid/cage-aid/cage-aid.component';
import { MobileBehavioralHealthComponent } from './mobile-behavioral-health/mobile-behavioral-health.component';
import { MobileDastComponent } from './mobile-dast/mobile-dast.component';
import { MobileDischargeComponent } from './mobile-discharge/mobile-discharge.component';
import { MobileGapNoteComponent } from './mobile-gap-note/mobile-gap-note.component';
import { MobileGroupNoteComponent } from './mobile-group-note/mobile-group-note.component';
import { MobileIndivisualTreatmentComponent } from './mobile-indivisual-treatment/mobile-indivisual-treatment.component';
import { MobilePsychiatricAssessmentComponent } from './mobile-psychiatric-assessment/mobile-psychiatric-assessment.component';
import { MobilePsychiatricProgressNoteComponent } from './mobile-psychiatric-progress-note/mobile-psychiatric-progress-note.component';
import { MobilePsychosocialAssessmentComponent } from './mobile-psychosocial-assessment/mobile-psychosocial-assessment.component';
import { MobilePsychosocialCommercialComponent } from './mobile-psychosocial-commercial/mobile-psychosocial-commercial.component';
import { MobileSuicideRiskComponent } from './mobile-suicide-risk/mobile-suicide-risk.component';
import { MobileTransitionSummaryComponent } from './mobile-transition-summary/mobile-transition-summary.component';
import { MobileTratmentComponent } from './mobile-tratment.component';

const routes: Routes = [
  {
    path:'',
    component:MobileTratmentComponent
  },
  {
    path:'Psychiatric-mobile',
    component:MobilePsychiatricAssessmentComponent
  },
  {
    path:'Psychosocial-mobile',
    component:MobilePsychosocialAssessmentComponent
  },
  {
    path:'Psychosocial-commercial',
    component: MobilePsychosocialCommercialComponent
  },
  {
    path:'mobile-psychiatric-progress',
    component: MobilePsychiatricProgressNoteComponent
  },
  {
    path:'mobile-Gap-Notes',
    component: MobileGapNoteComponent
  },
  {
    path:'mobile-Group-Notes',
    component: MobileGroupNoteComponent
  },
  {
    path:'mobile-Individual-Treatment',
    component: MobileIndivisualTreatmentComponent
  },
  {
    path:'mobile-cageAid',
    component: CageAidComponent
  },
  {
    path:'mobile-dast',
    component: MobileDastComponent
  },
  {
    path:'mobile-DischargeSummary',
    component: MobileDischargeComponent
  },
  {
    path:'mobile-TransitionSummary',
    component: MobileTransitionSummaryComponent
  },
  {
    path:'mobile-SuicideAssessment',
    component: MobileSuicideRiskComponent
  },
  {
    path:'mobile-BehavioralHealthNursing',
    component: MobileBehavioralHealthComponent
  },
  {
    path: 'initial-Clinical',
    loadChildren: () => import('./initial-clinical/initial-clinical.module').then(m => m.InitialClinicalModule)
  },
  {
    path: 'mobile-progress',
    loadChildren: () => import('./mobile-progress-note/mobile-progress-note.module').then(m => m.MobileProgressNoteModule)
  },
  {
    path: 'initial-Electronic',
    loadChildren: () => import('./initial-electronic-data/initial-electronic-data.module').then(m => m.InitialElectronicDataModule)
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
  {
    path: 'Childandadolescentdischarge',
  loadChildren: () => import('../notes/childandadolescentdischarge/childandadolescentdischarge.module').then(m => m.ChildandadolescentdischargeModule)
  },
  {
    path: 'dischargeInfoSheet',
    loadChildren: () => import('../notes/discharge-info-sheet/discharge-info-sheet.module').then(m => m.DischargeInfoSheetModule)
  },
  {
    path: 'criticalincidentreport',
    loadChildren: () => import('../notes/criticalincidentreport/criticalincidentreport.module').then(m => m.CriticalincidentreportModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileTratmentRoutingModule { }
