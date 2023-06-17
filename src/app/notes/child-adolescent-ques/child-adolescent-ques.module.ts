import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildAdolescentQuesRoutingModule } from './child-adolescent-ques-routing.module';
import { ChildAdolescentQuesComponent } from './child-adolescent-ques/child-adolescent-ques.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from 'src/app/components/components.module';
import { GeneralComponent } from './general/general.component';
import { PsychiatricSymptomsComponent } from './psychiatric-symptoms/psychiatric-symptoms.component';
import { SchoolPerformanceComponent } from './school-performance/school-performance.component';
import { ContinueComponent } from './continue/continue.component';
import { SignatureComponent } from './signature/signature.component';


@NgModule({
  declarations: [
    ChildAdolescentQuesComponent,
    GeneralComponent,
    PsychiatricSymptomsComponent,
    SchoolPerformanceComponent,
    ContinueComponent,
    SignatureComponent
  ],
  imports: [
    CommonModule,
    ChildAdolescentQuesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ComponentsModule,
  ]
})
export class ChildAdolescentQuesModule { }
