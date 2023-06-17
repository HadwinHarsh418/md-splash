import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { AddpaymentComponent } from './addpayment/addpayment.component';
import { AddretractionComponent } from './addretraction/addretraction.component';
import { ViewallpaymentsComponent } from './viewallpayments/viewallpayments.component';
import { ViewallretractionComponent } from './viewallretraction/viewallretraction.component';
import { VieweraComponent } from './viewera/viewera.component';
import { ViewdecodedfilesComponent } from './viewdecodedfiles/viewdecodedfiles.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    AddpaymentComponent,
    AddretractionComponent,
    ViewallpaymentsComponent,
    ViewallretractionComponent,
    VieweraComponent,
    ViewdecodedfilesComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    NgxDatatableModule
  ],
  exports:[AddpaymentComponent,AddretractionComponent,ViewallpaymentsComponent,
    ViewallretractionComponent,VieweraComponent,ViewdecodedfilesComponent]
})
export class PaymentModule { }
