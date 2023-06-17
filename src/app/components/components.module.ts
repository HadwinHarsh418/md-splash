import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../_helpers/directives/directives.module';
import { PipesModule } from '../_helpers/pipes/pipes.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ReviewsComponent } from './reviews/reviews.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ConfirmModalComponent,
    ReviewsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DirectivesModule,
    PipesModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ConfirmModalComponent,
    ReviewsComponent
    
  ],
  entryComponents: [
  
  ]

})
export class ComponentsModule { }
