import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DastRoutingModule } from './dast-routing.module';
import { DastComponent } from './dast/dast.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DastComponent
  ],
  imports: [
    CommonModule,
    DastRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    DastComponent
  ]
})
export class DastModule { }
