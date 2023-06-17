import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing/billing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../components/components.module';
import { EncounterComponent } from './encounter/encounter.component';
import { TherapyandpsychiatricComponent } from './therapyandpsychiatric/therapyandpsychiatric.component';
import { PrpclaimsComponent } from './prpclaims/prpclaims.component';
import { BatchlistingComponent } from './batchlisting/batchlisting.component';
import { PaymentModule } from "./payment/payment.module";
import { BillingreportModule } from "./billingreport/billingreport.module";
import { FeeScheduleModule } from "./fee-schedule/fee-schedule.module";
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    declarations: [
        BillingComponent,
        EncounterComponent,
        TherapyandpsychiatricComponent,
        PrpclaimsComponent,
        BatchlistingComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        BillingRoutingModule,
        ReactiveFormsModule,
        CommonModule,
        ReactiveFormsModule,
        NgbModule,
        ComponentsModule,
        PaymentModule,
        BillingreportModule,
        FeeScheduleModule
    ]
})
export class BillingModule { }
