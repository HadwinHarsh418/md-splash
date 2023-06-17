import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ComponentsModule } from '../components/components.module';

import { AdministrativeRoutingModule } from './administrative-routing.module';
import { AdministrativeComponent } from './administrative.component';
import { AdministrativeSettingModule } from './administrative-setting/administrative-setting.module';
import { AdministrativeUsersComponent } from './administrative-users/administrative-users.component';
import { AdministrativeUsersModule } from './administrative-users/administrative-users.module';
import { RightContentComponent } from './administrative-setting/right-content/right-content.component';
import { AdministrativeProvidersModule } from './administrative-providers/administrative-providers.module';
import { AdministrativeClientsModule } from './administrative-clients/administrative-clients.module';
import { AdministrativeClientsGridModule } from './administrative-clients-grid/administrative-clients-grid.module';
import { AdministrativeIncorectLoginTracksModule } from './administrative-incorect-login-tracks/administrative-incorect-login-tracks.module';
import { AdministrativeTrackingModule } from './administrative-tracking/administrative-tracking.module';


@NgModule({
  declarations: [
    AdministrativeComponent,
  ],
  imports: [
    AdministrativeRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule,
    ComponentsModule,
    NgxDatatableModule,
    AdministrativeSettingModule,
    AdministrativeUsersModule,
    AdministrativeProvidersModule,
    AdministrativeClientsModule,
    AdministrativeClientsGridModule,
    AdministrativeTrackingModule,
    AdministrativeIncorectLoginTracksModule
  ]
})
export class AdministrativeModule { }
