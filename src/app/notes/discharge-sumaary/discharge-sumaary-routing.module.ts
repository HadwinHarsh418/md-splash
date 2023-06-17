import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DischargeSumaaryComponent } from './discharge-sumaary.component';
import { DischargeComponent } from './discharge/discharge.component';
import { ProgressSummaryComponent } from './progress-summary/progress-summary.component';
import { ReferralsSummaryComponent } from './referrals-summary/referrals-summary.component';
import { RxdxSummaryComponent } from './rxdx-summary/rxdx-summary.component';

const routes: Routes = [
  {path:'',
  component:DischargeSumaaryComponent
  },
  {path:'progresssummary',
  component:ProgressSummaryComponent
  },
  {path:'rxdxsummary',
  component:RxdxSummaryComponent
  },
  {path:'referrals',
  component:ReferralsSummaryComponent
  },
  {path:'discharge',
  component:DischargeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DischargeSumaaryRoutingModule { }
