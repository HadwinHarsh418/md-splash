import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalNecessityScreenComponent } from './medical-necessity-screen/medical-necessity-screen.component';

const routes: Routes = [
  {path:'',component:MedicalNecessityScreenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalNecessityScreenRoutingModule { }
