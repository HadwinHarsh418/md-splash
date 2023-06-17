import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LayoutRoutingModule } from './layout-routing.module';
import { ComponentsModule } from '../components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectivesModule } from '../_helpers/directives/directives.module';
import { PipesModule } from '../_helpers/pipes/pipes.module';
import { LayoutComponent } from './layout.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../pages/member/dashboard/dashboard.component';
import { ClientModule } from '../client/client.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../_helpers/jwt.interceptor';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DirectivesModule,
    LayoutRoutingModule,
    PipesModule,
    // NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot(),
    ClientModule

  ],
  declarations: [
    LayoutComponent,
    DashboardComponent,
  ],
  exports: [
    LayoutComponent
  ],
})
export class LayoutModule { }
