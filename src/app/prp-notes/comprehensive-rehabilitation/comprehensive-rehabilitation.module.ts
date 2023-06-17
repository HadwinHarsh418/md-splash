import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprehensiveRehabilitationRoutingModule } from './comprehensive-rehabilitation-routing.module';
import { GeneralComponent } from './general/general.component';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { ComprehensiveRehabilitationComponent } from './comprehensive-rehabilitation/comprehensive-rehabilitation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LivingskillsComponent } from './livingskills/livingskills.component';
import { MobilityComponent } from './mobility/mobility.component';
import { PsychComponent } from './psych/psych.component';
import { SomaticComponent } from './somatic/somatic.component';
import { RehabilitationComponent } from './rehabilitation/rehabilitation.component';
import { SafetyComponent } from './safety/safety.component';
import { ResidentiaLComponent } from './residentia-l/residentia-l.component';
import { EntitlementComponent } from './entitlement/entitlement.component';


@NgModule({
  declarations: [
    GeneralComponent,
    DiagnosticComponent,
    ComprehensiveRehabilitationComponent,
    LivingskillsComponent,
    MobilityComponent,
    PsychComponent,
    SomaticComponent,
    RehabilitationComponent,
    SafetyComponent,
    ResidentiaLComponent,
    EntitlementComponent
  ],
  imports: [
    CommonModule,
    ComprehensiveRehabilitationRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ComprehensiveRehabilitationModule { }
