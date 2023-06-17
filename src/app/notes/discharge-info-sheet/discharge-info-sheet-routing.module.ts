import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DischargeInfoComponent } from '../lucas-individualized-treatment/discharge-info/discharge-info.component';
import { DischargeInfoSheetComponent } from './discharge-info-sheet/discharge-info-sheet.component';

const routes: Routes = [
  {path:'',component:DischargeInfoSheetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DischargeInfoSheetRoutingModule { }
