import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprehensiveRehabilitationComponent } from './comprehensive-rehabilitation/comprehensive-rehabilitation.component';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { GeneralComponent } from './general/general.component';
import { LivingskillsComponent } from './livingskills/livingskills.component';
import { MobilityComponent } from './mobility/mobility.component';
import { SafetyComponent } from './safety/safety.component';

const routes: Routes = [
  {
    path:'',
    component:ComprehensiveRehabilitationComponent
  },
  {
    path:'general',
    component:GeneralComponent
  },
  {
    path:'Diagnotic',
    component:DiagnosticComponent
  },
  {
    path:'livingskill',
    component:LivingskillsComponent
  },
  {
    path:'mobility',
    component:MobilityComponent
  },
  {
    path:'safety',
    component:SafetyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprehensiveRehabilitationRoutingModule { }
