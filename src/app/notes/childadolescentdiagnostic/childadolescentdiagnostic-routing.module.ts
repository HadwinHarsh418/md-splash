import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentSupportComponent } from '../adult-diagnosis-assesment/current-support/current-support.component';
import { ProblemCheckComponent } from '../adult-diagnosis-assesment/problem-check/problem-check.component';
import { ChildadolescentdiagnosticComponent } from './childadolescentdiagnostic/childadolescentdiagnostic.component';
import { LegalHistoryComponent } from './legal-history/legal-history.component';
import { MentalHealthComponent } from './AlcoholDrugUse/mental-health.component';

const routes: Routes = [
  {path:'current',
  component:CurrentSupportComponent
  },
  {path:'legalhistory',
  component:LegalHistoryComponent
  },
  {path:'problemchecklist',
  component:ProblemCheckComponent
  },
  {path:'mentalhealth',
  component:MentalHealthComponent
  },
  {path:'',
  component:ChildadolescentdiagnosticComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CHILDADOLESCENTDIAGNOSTICRoutingModule { }
