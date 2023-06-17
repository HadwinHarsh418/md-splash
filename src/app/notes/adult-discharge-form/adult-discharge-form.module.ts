import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdultDischargeFormRoutingModule } from './adult-discharge-form-routing.module';
import { AdultDischargeFormComponent } from './adult-discharge-form/adult-discharge-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from 'src/app/components/components.module';
import { GeneralComponent } from './general/general.component';
import { ContinueComponent } from './continue/continue.component';


@NgModule({
  declarations: [
    AdultDischargeFormComponent,
    GeneralComponent,
    ContinueComponent
  ],
  imports: [
    CommonModule,
    AdultDischargeFormRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    ComponentsModule,

  ]
})
export class AdultDischargeFormModule { }
