import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdultQuesRoutingModule } from './adult-ques-routing.module';
import { AdultQuesComponent } from './adult-ques/adult-ques.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClientRoutingModule } from 'src/app/client/client-routing.module';
import { ClientModule } from 'src/app/client/client.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PaginationModule } from 'src/app/pagination/pagination.module';
import { GeneralComponent } from './general/general.component';
import { FunctionsandsymptomsComponent } from './functionsandsymptoms/functionsandsymptoms.component';
import { ContinueComponent } from './continue/continue.component';
import { Continue2Component } from './continue2/continue2.component';
import { LegalsystemComponent } from './legalsystem/legalsystem.component';
import { SignatureComponent } from './signature/signature.component';


@NgModule({
  declarations: [
    AdultQuesComponent,
    GeneralComponent,
    FunctionsandsymptomsComponent,
    ContinueComponent,
    Continue2Component,
    LegalsystemComponent,
    SignatureComponent
  ],
  imports: [
    CommonModule,
    AdultQuesRoutingModule,
    NgbModule,
    NgxDatatableModule,
    DragDropModule,
    PaginationModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ClientModule,
    ComponentsModule,
  ]
})
export class AdultQuesModule { }
