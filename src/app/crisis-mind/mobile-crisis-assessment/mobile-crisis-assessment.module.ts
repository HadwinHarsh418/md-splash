import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileCrisisAssessmentComponent } from '../mobile-crisis-assessment/mobile-crisis-assessment.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SessionInfoComponent } from './session-info/session-info.component';
import { SecondarySourceComponent } from './secondary-source/secondary-source.component';
import { QuestionsComponent } from './questions/questions.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

const routes=[
  {
    path:'',
    component:MobileCrisisAssessmentComponent
  }
]

@NgModule({
  declarations: [
    MobileCrisisAssessmentComponent,
    SessionInfoComponent,
    SecondarySourceComponent,
    QuestionsComponent,
    DisclaimerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class MobileCrisisAssessmentModule { }
