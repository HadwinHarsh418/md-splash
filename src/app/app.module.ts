import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/public/login/login.component';
import { SetPasswordComponent } from './pages/public/set-password/set-password.component';
import { ForgotPasswordComponent } from './pages/public/forgot-password/forgot-password.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ComponentsModule } from './components/components.module';
import { RegisterComponent } from './pages/public/register/register.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from './layout/layout.module';
import { PrpNotesComponent } from './prp-notes/prp-notes.component';
import { MailModule } from './mail/mail.module';
import { CrisisMindComponent } from './crisis-mind/crisis-mind.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SetPasswordComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    PrpNotesComponent,
    CrisisMindComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgxImageZoomModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule,
    ComponentsModule,
    NgxDatatableModule,
    FormsModule,
    LayoutModule,
    
  ],
  providers:[{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
