import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CageAidRoutingModule } from './cage-aid-routing.module';
import { CageAidComponent } from './cage-aid/cage-aid.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CageAidComponent
  ],
  imports: [
    CommonModule,
    CageAidRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    CageAidComponent
  ]
})
export class CageAidModule { }
