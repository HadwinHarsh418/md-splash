import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAdolescentQuesComponent } from './child-adolescent-ques/child-adolescent-ques.component';

const routes: Routes = [
  {path:'',component:ChildAdolescentQuesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildAdolescentQuesRoutingModule { }
