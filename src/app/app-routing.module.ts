import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ForgotPasswordComponent } from './pages/public/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/public/login/login.component';
import { NewClientComponent } from './client/new-client/new-client.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { SetPasswordComponent } from './pages/public/set-password/set-password.component';
import { AuthGuard } from './_helpers/auth/auth.guards';
import { MailComponent } from './mail/mail/mail.component';


const routes: Routes = [
  { path: '', component: LoginComponent},    
  // { path:'mail',component:MailComponent},
  {
    path: 'member',
    component: LayoutComponent,
    children: [
        {
          path: '',
          loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
        },
        // {
        //   path: 'mail',
        //   loadChildren: () => import('./mail/mail.module').then(m => m.MailModule)
        // },
        {
          path: 'documents',
          loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule)
        },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
