import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeScheduleRoutingModule } from './fee-schedule-routing.module';
import { RegularComponent } from './regular/regular.component';
import { PrpComponent } from './prp/prp.component';
import { MobileTreatmentComponent } from './mobile-treatment/mobile-treatment.component';
import { IopComponent } from './iop/iop.component';
import { CaseManagementComponent } from './case-management/case-management.component';


@NgModule({
  declarations: [
    RegularComponent,
    PrpComponent,
    MobileTreatmentComponent,
    IopComponent,
    CaseManagementComponent
  ],
  imports: [
    CommonModule,
    FeeScheduleRoutingModule
  ],
  exports:[RegularComponent,
    PrpComponent,
    MobileTreatmentComponent,
    IopComponent,
    CaseManagementComponent]
})
export class FeeScheduleModule { }
