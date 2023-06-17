import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrativeProvidersComponent } from './administrative-providers.component';
import { ProviderUserFormComponent } from './provider-user-form/provider-user-form.component';



@NgModule({
  declarations: [
    AdministrativeProvidersComponent,
    ProviderUserFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AdministrativeProvidersComponent,
    ProviderUserFormComponent
  ]
})
export class AdministrativeProvidersModule { }
