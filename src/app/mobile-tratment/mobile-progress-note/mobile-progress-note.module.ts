import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobileProgressNoteComponent } from './mobile-progress-note.component';
import { MobileProgressNoteGeneralComponent } from './mobile-progress-note-general/mobile-progress-note-general.component';
import { MobileProgressNoteCsrComponent } from './mobile-progress-note-csr/mobile-progress-note-csr.component';
import { RouterModule } from '@angular/router';
import { PsychosocialAssessmentModule } from "../../notes/notes/psychosocial-assessment/psychosocial-assessment.module";

const routes=[
    {
      path:'Progress-notes',component:MobileProgressNoteComponent
    }
]

@NgModule({
    declarations: [
        MobileProgressNoteComponent,
        MobileProgressNoteGeneralComponent,
        MobileProgressNoteCsrComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule,
        RouterModule.forChild(routes),
        PsychosocialAssessmentModule
    ]
})
export class MobileProgressNoteModule { }
