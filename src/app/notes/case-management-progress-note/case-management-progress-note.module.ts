import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseManagementProgressNoteRoutingModule } from './case-management-progress-note-routing.module';
import { ManagementProgressNoteComponent } from './management-progress-note/management-progress-note.component';
import { ClientComponent } from './client/client.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClientRoutingModule } from 'src/app/client/client-routing.module';
import { ClientModule } from 'src/app/client/client.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PaginationModule } from 'src/app/pagination/pagination.module';


@NgModule({
  declarations: [
    ManagementProgressNoteComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    CaseManagementProgressNoteRoutingModule,
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
export class CaseManagementProgressNoteModule { }
