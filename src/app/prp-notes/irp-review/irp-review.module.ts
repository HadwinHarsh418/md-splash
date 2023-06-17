import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IrpReviewRoutingModule } from './irp-review-routing.module';
import { IrpReviewComponent } from './irp-review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { GeneralComponent } from './general/general.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { GoalComponent } from './goal/goal.component';
import { SignatureComponent } from './signature/signature.component';
import { ClientPlanComponent } from './client-plan/client-plan.component';


@NgModule({
  declarations: [
    IrpReviewComponent,
    GeneralComponent,
    DiagnosisComponent,
    GoalComponent,
    SignatureComponent,
    ClientPlanComponent
  ],
  imports: [
    CommonModule,
    IrpReviewRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule,
  ]
})
export class IrpReviewModule { }
