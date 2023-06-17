import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DischargeSumaaryRoutingModule } from './discharge-sumaary-routing.module';
import { DischargeSumaaryComponent } from '../discharge-sumaary/discharge-sumaary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientModule } from "../../client/client.module";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ComponentsModule } from 'src/app/components/components.module';
import { PaginationModule } from 'src/app/pagination/pagination.module';
import { ClientRoutingModule } from 'src/app/client/client-routing.module';
import { GeneralSummaryComponent } from './general-summary/general-summary.component';
import { ProgressSummaryComponent } from './progress-summary/progress-summary.component';
import { RxdxSummaryComponent } from './rxdx-summary/rxdx-summary.component';
import { ReferralsSummaryComponent } from './referrals-summary/referrals-summary.component';
import { DischargeComponent } from './discharge/discharge.component';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
    declarations: [
        DischargeSumaaryComponent,
        GeneralSummaryComponent,
        ProgressSummaryComponent,
        RxdxSummaryComponent,
        ReferralsSummaryComponent,
        DischargeComponent
    ],
    imports: [
        CommonModule,
        DischargeSumaaryRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ClientModule,
        NgbModule,
        ComponentsModule,
        NgxDatatableModule,
        DragDropModule,
        PaginationModule,
        CommonModule,
        ClientRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ClientModule,
    ],
    exports:[
        DischargeSumaaryComponent,
        GeneralSummaryComponent,
        ProgressSummaryComponent,
        RxdxSummaryComponent,
        ReferralsSummaryComponent,
        DischargeComponent
    ]
})
export class DischargeSumaaryModule { }
