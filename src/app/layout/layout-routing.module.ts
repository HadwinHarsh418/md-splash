import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from '../client/client/client.component';
import { DashboardComponent } from '../pages/member/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',component:DashboardComponent
  },
  {
    path: 'client',
    component: ClientComponent,
    children: [
        {
          path: '',
          loadChildren: () => import('../client/client.module').then(m => m.ClientModule)
        },
        {
          path: 'contact-Info',
          loadChildren: () => import('../contact-info/contact-info.module').then(m => m.ContactInfoModule)
        },
        {
          path:'notes',
          loadChildren:()=>import('../notes/notes.module').then(m=>m.NotesModule)
        },
        {
          path:'prp_notes',
          loadChildren:()=>import('../prp-notes/prp-notes.module').then(m=>m.PrpNotesModule)
        },
        {
          path:'iop',
          loadChildren:()=>import('../iop/iop.module').then(m=>m.IopModule)
        },
        {
          path: 'maps',
          loadChildren: () => import('../maps/maps.module').then(m => m.MapsModule)
        },
        {
          path: 'assignment',
          loadChildren: () => import('../assignments/assignments.module').then(m => m.AssignmentsModule)
        },
        {
          path: 'dashboard',
          loadChildren: () => import('../dashboard2/dashboard2.module').then(m => m.Dashboard2Module)
        },
        {
          path: 'admin',
          loadChildren: () => import('../administrative/administrative.module').then(m => m.AdministrativeModule)
        },
        {
          path: 'billing',
          loadChildren: () => import('../billing/billing.module').then(m => m.BillingModule)
        },
        {
          path: 'mobileTreatment',
          loadChildren: () => import('../mobile-tratment/mobile-tratment.module').then(m => m.MobileTratmentModule)
        },
        {
          path: 'mail',
          loadChildren: () => import('../mail/mail.module').then(m => m.MailModule)
        },
        {
          path: 'report',
          loadChildren: () => import('../reports/reports.module').then(m => m.ReportsModule)
        },
        {
          path: 'crisismind',
          loadChildren: () => import('../crisis-mind/crisis-mind.module').then(m => m.CrisisMindModule)
        },
        {
          path: 'calendar',
          loadChildren: () => import('../calendar/calendar.module').then(m => m.CalendarModule)
        },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
