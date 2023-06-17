import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { NewClientComponent } from './new-client/new-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ComponentsModule } from '../components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ClientListingComponent } from './client-listing/client-listing.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { HeadingComponent } from '../layout/heading/heading.component';
import { ClientComponent } from './client/client.component';
import { DemodraphicsDetailsComponent } from './demodraphics-details/demodraphics-details.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactComponent } from './contact/contact.component';
import { NotesComponent } from './notes/notes.component';
import { InsuranceTabsFormComponent } from './insurance-tabs-form/insurance-tabs-form.component';
import { MobileAuthFormComponent } from './mobile-auth-form/mobile-auth-form.component';
import { IopAuthFormComponent } from './iop-auth-form/iop-auth-form.component';
import { PrpAuthFormComponent } from './prp-auth-form/prp-auth-form.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { PaginationModule } from '../pagination/pagination.module';
import { AssignmentsComponent } from './assignments/assignments.component';
import { MapsModule } from '../maps/maps.module';
import { ClientMapComponent } from './client-map/client-map.component';
import { RxComponent } from './rx/rx.component';
import { DxComponent } from './dx/dx.component';
import { ClientDocumentComponent } from './client-document/client-document.component';


@NgModule({
  declarations: [
    NewClientComponent,
    ClientListingComponent,
    ClientDetailsComponent,
    InsuranceComponent,
    HeadingComponent,
    ClientComponent,
    DemodraphicsDetailsComponent,
    AppointmentComponent,
    ContactComponent,
    NotesComponent,
    InsuranceTabsFormComponent,
    MobileAuthFormComponent,
    IopAuthFormComponent,
    PrpAuthFormComponent,
    AssignmentsComponent,
    ClientMapComponent,
    RxComponent,
    DxComponent,
    ClientDocumentComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule,
    ComponentsModule,
    NgxDatatableModule,
    DragDropModule,
    PaginationModule,
    MapsModule
  ],
  exports:[
    NewClientComponent,
    ClientListingComponent,
    HeadingComponent
  ],
  providers:[DatePipe]
})
export class ClientModule { }
