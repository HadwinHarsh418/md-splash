import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactInfoRoutingModule } from './contact-info-routing.module';
import { ContactInfoComponent } from './contact-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    ContactInfoComponent
  ],
  imports: [
    CommonModule,
    ContactInfoRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    // ComponentsModule,
  ]
})
export class ContactInfoModule { }
