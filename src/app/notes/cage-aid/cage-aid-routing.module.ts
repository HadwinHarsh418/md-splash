import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CageAidComponent } from './cage-aid/cage-aid.component';

const routes: Routes = [
  {path:'',component:CageAidComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CageAidRoutingModule { }
