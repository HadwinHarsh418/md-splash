import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InitialClinicalComponent } from './initial-clinical.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes = [
  {
    path:'',
    component:InitialClinicalComponent
  }
]

@NgModule({
  declarations: [
    InitialClinicalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class InitialClinicalModule { }
