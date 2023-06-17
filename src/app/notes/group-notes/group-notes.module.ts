import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupNotesRoutingModule } from './group-notes-routing.module';
import { GroupNotesComponent } from './group-notes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    GroupNotesComponent
  ],
  imports: [
    CommonModule,
    GroupNotesRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule
  ],
  exports:[
    GroupNotesComponent
  ]
})
export class GroupNotesModule { }
