import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinueComponent } from './continue/continue.component';
import { GeneralComponent } from './general/general.component';
import { GeneralcomponentComponent } from './generalcomponent/generalcomponent.component';

const routes: Routes = [
  {path:'continue',
  component:ContinueComponent
  },
  {path:'',
  component:GeneralComponent
  },
  {path:'general',
  component:GeneralcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildandadolescentdischargeRoutingModule { }
