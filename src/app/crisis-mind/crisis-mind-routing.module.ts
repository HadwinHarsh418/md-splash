import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BriefDiagnosticComponent } from './brief-diagnostic/brief-diagnostic.component';
import { CallDataComponent } from './call-data/call-data.component';
import { CaseClosureComponent } from './case-closure/case-closure.component';
import { CommunityConcernComponent } from './community-concern/community-concern.component';
import { CommunityTragedyComponent } from './community-tragedy/community-tragedy.component';
import { CrisisFollowUpComponent } from './crisis-follow-up/crisis-follow-up.component';
import { CrisisMindMtcComponent } from './crisis-mind-mtc/crisis-mind-mtc.component';
import { CrisisMindComponent } from './crisis-mind.component';
import { EndOfShiftComponent } from './end-of-shift/end-of-shift.component';
import { ImindreferralComponent } from './imindreferral/imindreferral.component';
import { InitialElectronicComponent } from './initial-electronic/initial-electronic.component';
import { MobileResponseReportComponent } from './mobile-response-report/mobile-response-report.component';
import { PhoneResponseReportComponent } from './phone-response-report/phone-response-report.component';

const routes: Routes = [
  {
    path:'',
    component:CrisisMindComponent
  },
  {
    path:'mobileresponsereport',
    component:MobileResponseReportComponent
  },
  {
    path:'initialElectronic',
    component:InitialElectronicComponent
  },
  {
    path:'communitytragedy',
    component:CommunityTragedyComponent
  },
  {
    path:'caseclosure',
    component:CaseClosureComponent
  },
  {
    path:'communityconcern',
    component:CommunityConcernComponent
  },
  {
    path:'briefdiagnostic',
    component:BriefDiagnosticComponent
  },
  {
    path:'calldata',
    component:CallDataComponent
  },
  {
    path:'crisisfollowup',
    component:CrisisFollowUpComponent
  },
  {
    path:'crisismindmtc',
    component:CrisisMindMtcComponent
  },
  {
    path:'endofshift',
    component:EndOfShiftComponent
  },
  {
    path:'imindrefrral',
    component:ImindreferralComponent
  },
  {
    path:'phoneresponse',
    component:PhoneResponseReportComponent
  },
  {
    path: 'mobileCrisis',
    loadChildren: () => import('./mobile-crisis-assessment/mobile-crisis-assessment.module').then(m => m.MobileCrisisAssessmentModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisMindRoutingModule { }
