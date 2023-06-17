import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { AuthenticationService } from './auth/authentication.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
export const InterceptorSkipHeader = 'X-Skip-Interceptor';
export const InterceptorSkipAuthHeader = 'X-SkipAuth-Interceptor';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  /**
   *
   * @param {AuthenticationService} _authenticationService
   */
  constructor(private _router: Router,private _authenticationService: AuthenticationService) { }

  /**
   * Add auth header with jwt if user is logged in and request is to api url
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser:any = this._authenticationService.currentUserValue;
    const isLoggedIn = currentUser && currentUser.Token; 
    const isApiUrl = request.url.startsWith(environment.baseApiUrl);
    if (isApiUrl) {
      let headersApp:any = { 
        // appType: environment.appType,
        // appUrl: window.location.origin,
      }
      if (isLoggedIn) { 
        
        // headersApp.userId = `${currentUser?.userId}`;
        // headersApp.roleId = `${currentUser?.role?.roleId}`;
        // headersApp.roleName= `${currentUser?.role?.roleName}`;
        headersApp.Authorization = `Bearer ${currentUser.Token}`;
      }
      else if (this._authenticationService.tempToken) {
        headersApp.AppAuthorization = `Bearer ${this._authenticationService.tempToken}`
      }
      if (request.headers.has(InterceptorSkipHeader)) {
        request = request.clone({ headers: request.headers.delete(InterceptorSkipHeader) });
      }
      request = request.clone({
        setHeaders: headersApp
      });
    }

    return next.handle(request).pipe(
      tap(
        success => { },
        err => {
            if (err.status == 401) {
              this._authenticationService.logout();
            }
            else if(err.status == 404)
            {
              this._router.navigateByUrl('404');
            }
            else if(err.status >= 500){
              this._router.navigateByUrl('error/500');
            }
          }
    )
    );
  }
}
