import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalNecessityScreenRoutingModule } from './medical-necessity-screen-routing.module';
import { MedicalNecessityScreenComponent } from './medical-necessity-screen/medical-necessity-screen.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MedicalNecessityScreenComponent
  ],
  imports: [
    CommonModule,
    MedicalNecessityScreenRoutingModule,
    ReactiveFormsModule
  ]
})
export class MedicalNecessityScreenModule { }
