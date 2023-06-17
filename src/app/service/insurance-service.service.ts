import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../_helpers/auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InsuranceServiceService {
  apiUrl:any;
  currentUser:any;
  constructor(private _http: HttpClient, private router: Router,private _authenticationService:AuthenticationService) {
      this.apiUrl = environment.baseApiUrl;
      this.currentUser = localStorage.getItem('ID');
    }
    AddNewInsurance(data:any): Observable<any> {
      return this._http.post(`${environment.baseApiUrl}ClientInsurance/SaveInsAndAuths`,data);
    }
    AddInsurance(data:any): Observable<any> {
      return this._http.post(`${environment.baseApiUrl}ClientInsurance/Save`,data);
    }
    AddAuthorizations(data:any): Observable<any> {
      return this._http.post(`${environment.baseApiUrl}InsuranceAuthorizations/Save`,data);
    }
}
