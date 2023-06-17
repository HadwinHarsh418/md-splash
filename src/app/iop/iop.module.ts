import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IopRoutingModule } from './iop-routing.module';
import { IopComponent } from './iop/iop.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { PsycosocialAssessmentComponent } from './psycosocial-assessment/psycosocial-assessment.component';
import { TransitionSummaryModule } from "../notes/transition-summary/transition-summary.module";
import { PsychosocialAssessmentModule } from "../notes/notes/psychosocial-assessment/psychosocial-assessment.module";
import { ProgressNoteModule } from '../notes/progress-note/progress-note.module';
import { MonthlySummaryComponent } from '../prp-notes/monthly-summary/monthly-summary.component';
import { PsycosocialAssessmentModule } from './psycosocial-assessment/psycosocial-assessment.module';
import { IopGapNotesModule } from './iop-gap-notes/iop-gap-notes.module';
import { IndivisualTreatmentModule } from "../notes/indivisual-treatment/indivisual-treatment.module";


@NgModule({
    declarations: [
        IopComponent,
        PsycosocialAssessmentComponent,
    ],
    imports: [
        CommonModule,
        IopRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        NgbModule,
        TransitionSummaryModule,
        PsychosocialAssessmentModule,
        ProgressNoteModule,
        PsycosocialAssessmentModule,
        IopGapNotesModule,
        IndivisualTreatmentModule
    ]
})
export class IopModule { }
