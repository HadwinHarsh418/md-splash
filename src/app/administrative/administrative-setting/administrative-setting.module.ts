import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { PasswordComponent } from './password/password.component';
import { MailComponent } from './mail/mail.component';
import { CalenderComponent } from './calender/calender.component';
import { ConsumerSupportComponent } from './consumer-support/consumer-support.component';
import { ClinicalManagerComponent } from './clinical-manager/clinical-manager.component';
import { CalenderTypeComponent } from './calender-type/calender-type.component';
import { AdministrativeDocumentComponent } from './administrative-document/administrative-document.component';
import { FeaturesComponent } from './features/features.component';
import { ManagedCareOrgComponent } from './managed-care-org/managed-care-org.component';
import { MessageComponent } from './message/message.component';
import { AdministrativeIntakeDocumentComponent } from './administrative-intake-document/administrative-intake-document.component';
import { TicklersComponent } from './ticklers/ticklers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RightContentComponent } from './right-content/right-content.component';



@NgModule({
  declarations: [
    CompanyInfoComponent,
    PasswordComponent,
    MailComponent,
    CalenderComponent,
    ConsumerSupportComponent,
    ClinicalManagerComponent,
    CalenderTypeComponent,
    AdministrativeDocumentComponent,
    AdministrativeIntakeDocumentComponent,
    TicklersComponent,
    MessageComponent,
    ManagedCareOrgComponent,
    FeaturesComponent,
    RightContentComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CompanyInfoComponent,
    PasswordComponent,
    MailComponent,
    CalenderComponent,
    ConsumerSupportComponent,
    ClinicalManagerComponent,
    CalenderTypeComponent,
    AdministrativeDocumentComponent,
    AdministrativeIntakeDocumentComponent,
    TicklersComponent,
    MessageComponent,
    ManagedCareOrgComponent,
    FeaturesComponent,
    RightContentComponent
  ]
})
export class AdministrativeSettingModule { }
