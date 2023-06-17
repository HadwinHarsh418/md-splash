import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransitionSummaryRoutingModule } from './transition-summary-routing.module';
import { TransitionSummaryComponent } from '../transition-summary/transition-summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { GeneralComponent } from './general/general.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { SignatureComponent } from './signature/signature.component';


@NgModule({
  declarations: [
    TransitionSummaryComponent,
    GeneralComponent,
    StrengthsComponent,
    DiagnosisComponent,
    SignatureComponent
  ],
  imports: [
    CommonModule,
    TransitionSummaryRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule,
    FormsModule
  ],
  exports:[
    TransitionSummaryComponent,
    GeneralComponent,
    StrengthsComponent,
    DiagnosisComponent,
    SignatureComponent
  ]
})
export class TransitionSummaryModule { }
