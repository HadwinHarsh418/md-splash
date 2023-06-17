import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdultQuesComponent } from './adult-ques/adult-ques.component';
import { ContinueComponent } from './continue/continue.component';
import { Continue2Component } from './continue2/continue2.component';
import { FunctionsandsymptomsComponent } from './functionsandsymptoms/functionsandsymptoms.component';
import { GeneralComponent } from './general/general.component';
import { LegalsystemComponent } from './legalsystem/legalsystem.component';
import { SignatureComponent } from './signature/signature.component';

const routes: Routes = [
  {path:'',component:AdultQuesComponent},
  {path:'general',component:GeneralComponent},
  {path:'continue',component:ContinueComponent},
  {path:'continue2',component:Continue2Component},
  {path:'legalsystem',component:LegalsystemComponent},
  {path:'functionandsymptomn',component:FunctionsandsymptomsComponent},
  {path:'signature',component:SignatureComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdultQuesRoutingModule { }
