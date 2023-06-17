import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { MailComponent } from './mail/mail.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    MailComponent
  ],
  imports: [
    CommonModule,
    MailRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    ComponentsModule,
  ]
})
export class MailModule { }
