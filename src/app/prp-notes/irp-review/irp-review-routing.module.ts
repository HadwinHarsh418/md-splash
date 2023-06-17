import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IrpReviewComponent } from './irp-review.component';

const routes: Routes = [
  { path:'',
   component:IrpReviewComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IrpReviewRoutingModule { }
