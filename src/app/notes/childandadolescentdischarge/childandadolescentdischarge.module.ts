import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildandadolescentdischargeRoutingModule } from './childandadolescentdischarge-routing.module';
import { GeneralComponent } from './general/general.component';
import { ContinueComponent } from './continue/continue.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClientRoutingModule } from 'src/app/client/client-routing.module';
import { ClientModule } from 'src/app/client/client.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PaginationModule } from 'src/app/pagination/pagination.module';
import { GeneralcomponentComponent } from './generalcomponent/generalcomponent.component';


@NgModule({
  declarations: [
    GeneralComponent,
    ContinueComponent,
    GeneralcomponentComponent
  ],
  imports: [
    CommonModule,
    ChildandadolescentdischargeRoutingModule,
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
export class ChildandadolescentdischargeModule { }
