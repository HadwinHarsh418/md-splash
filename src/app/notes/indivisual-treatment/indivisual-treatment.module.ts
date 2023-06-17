import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndivisualTreatmentRoutingModule } from './indivisual-treatment-routing.module';
import { IndivisualTreatmentComponent } from './indivisual-treatment/indivisual-treatment.component';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { DemoFormsComponent } from './demo-forms/demo-forms.component';
import { DischargedFormsComponent } from './discharged-forms/discharged-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndivisualTreatmentComponent,
    AdditionalInfoComponent,
    DemoFormsComponent,
    DischargedFormsComponent
  ],
  imports: [
    CommonModule,
    IndivisualTreatmentRoutingModule,
    ToastrModule.forRoot(),
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    IndivisualTreatmentComponent,
    AdditionalInfoComponent,
    DemoFormsComponent,
    DischargedFormsComponent
  ]
})
export class IndivisualTreatmentModule { }
