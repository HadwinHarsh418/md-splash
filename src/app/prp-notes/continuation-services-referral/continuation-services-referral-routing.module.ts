import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinuationServicesReferralComponent } from './continuation-services-referral/continuation-services-referral.component';

const routes: Routes = [
  {path:'',component:ContinuationServicesReferralComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContinuationServicesReferralRoutingModule { }
