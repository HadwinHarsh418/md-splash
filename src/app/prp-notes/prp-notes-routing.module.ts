import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { COLLATERALNOTEComponent } from './collateralnote/collateralnote.component';
import { MonthlySummaryComponent } from './monthly-summary/monthly-summary.component';
import { PrpContactComponent } from './prp-contact/prp-contact.component';
import { PrpNotesComponent } from './prp-notes.component';
import { PRPCOLLABORATIONNOTEComponent } from './prpcollaborationnote/prpcollaborationnote.component';

const routes: Routes = [
  {
    path:'',
    component:PrpNotesComponent
  },
  {
    path:'prp-contact',
    component:PrpContactComponent
  },
  {
    path:'COLLATERALNOTE',
    component:COLLATERALNOTEComponent
  },
  {
    path:'PRPCOLLABORATIONNOTES',
    component:PRPCOLLABORATIONNOTEComponent
  },
  {
    path: 'irpReview',
    loadChildren: () => import('./irp-review/irp-review.module').then(m => m.IrpReviewModule)
  },
  {
    path: 'medicalNecessityScreenModule',
    loadChildren: () => import('./medical-necessity-screen/medical-necessity-screen.module').then(m => m.MedicalNecessityScreenModule)
  },
  {
    path: 'continuationServicesReferral',
    loadChildren: () => import('./continuation-services-referral/continuation-services-referral.module').then(m => m.ContinuationServicesReferralModule)
  },
  {path:'monthly-summary',component:MonthlySummaryComponent},
  {
    path: 'comprehensiverehabiliation',
    loadChildren: () => import('./comprehensive-rehabilitation/comprehensive-rehabilitation.module').then(m => m.ComprehensiveRehabilitationModule)
  },
  {
    path: 'dcSummaryNote',
    loadChildren: () => import('./dc-summary-note/dc-summary-note.module').then(m => m.DcSummaryNoteModule)
  },
  {
    path: 'daily-living',
    loadChildren: () => import('./daily-living-activities/daily-living-activities.module').then(m => m.DailyLivingActivitiesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrpNotesRoutingModule { }
