import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LucasIndividualizedTreatmentRoutingModule } from './lucas-individualized-treatment-routing.module';
import { LucasIndividualizedTreatmentComponent } from './lucas-individualized-treatment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GoalComponent } from './goal/goal.component';
import { DischargeInfoComponent } from './discharge-info/discharge-info.component';


@NgModule({
  declarations: [
    LucasIndividualizedTreatmentComponent,
    PersonalDetailsComponent,
    GoalComponent,
    DischargeInfoComponent
  ],
  imports: [
    CommonModule,
    LucasIndividualizedTreatmentRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class LucasIndividualizedTreatmentModule { }
