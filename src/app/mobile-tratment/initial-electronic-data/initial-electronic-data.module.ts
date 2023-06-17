import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InitialElectronicDataComponent } from './initial-electronic-data.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes=[
  {
    path:'',
    component:InitialElectronicDataComponent
  }
]

@NgModule({
  declarations: [
    InitialElectronicDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class InitialElectronicDataModule { }
