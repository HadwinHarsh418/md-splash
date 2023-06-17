import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../_helpers/auth/authentication.service';


@Injectable({ providedIn: 'root' })
export class ClientAddService {
apiUrl:any;
  currentUser:any;
  constructor(private _http: HttpClient,
    private location: Location, private router: Router,private _authenticationService:AuthenticationService) {
      this.currentUser = this._authenticationService.currentUserValue['Id']
      this.apiUrl = environment.baseApiUrl;
    }

    getAllOrganization(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetOrganisationOptions`);
    }
    getAllManager(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetConsSuppManagerOptions`);
    }
    getAllGender(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetGendersOptions`);
    }
    getAllMaritialStatus(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetMaritalOptions`);
    }
    GetPregnancyOptions(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetPregnancyOptions`);
    }
    GetEmploymentOptions(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetEmploymentOptions`);
    }
    GetStateCityByZip(data:any): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetStateCityByZip/?zip=${data}`);
    }
    GetById(id:any): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}Client/GetById?id=${id}`);
    }
    GetClinicianManagerOptions(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetClinicianManagerOptions`);
    }
    GetDoctors(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetDoctorOptions`);
    }

    // -----------------------------------Tab 2 -------------------------------------------------------

    GetConsumersMCOOptions(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetConsumersMCOOptions`);
    }
    GetActivePayorsWithDetail(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetActivePayorsWithDetail`);
    }
    GetRaceOptions(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetRaceOptions`);
    }
    GetLivingSituationOptions(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetLivingSituationOptions`);
    }
    GetHighestEductaionOptions(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetHighestEductaionOptions`);
    }
    GetWarOptions(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetWarOptions`);
    }
    GetPrimaryLangOptions(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetPrimaryLangOptions`);
    }
    GetTypeOfPolicyOptions(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetTypeOfPolicyOptions`);
    }
    GetPastArrestOptions(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetPastArrestOptions`);
    }
    GetPolicyHolderOptions(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetPolicyHolderOptions`);
    }

    saveclient(data:any) {
      return this._http.post(`${environment.baseApiUrl}client/saveclient`,data)
    }
    getClientListing(data:any,Id:any) {
      return this._http.post(`${environment.baseApiUrl}client/GetAll?id=${Id}`,data)
    }
    verfiedByCustomerList(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}shared/GetManagementUsersOptions`);
    }


    // .................................. Dashboard Api .................................................

    GetDashboardDetails(): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}AdminFeatures/Get`);
    }

    GetCodeByStatus(body:any): Observable<any> {
      return this._http.post(`${environment.baseApiUrl}shared/GetProcedureCodesByType`,body);
    }
    GetInsurance(body:any): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}ClientInsurance/GetClientInsList?id=${body}`);
    }
    // GetAuthorization(body:any): Observable<any> {
    //   return this._http.get(`${environment.baseApiUrl}ClientInsurance/GetClientInsAndAuths?id=${body}`);
    // }
    GetInsuranceById(body:any): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}ClientInsurance/Get?id=${body}`);
    }
    GetInsuranceAuthorizations(body:any): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}InsuranceAuthorizations/GetAuthList?insId=${body.insId}&authType=${body.authType}`);
    }
    GetInsuranceAuthorizationsById(body:any): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}InsuranceAuthorizations/Get?id=${body}`);
    }
    GetClient(body:any): Observable<any> {
      return this._http.get(`${environment.baseApiUrl}ClientContacts/GetByClient?id=${body}`);
    }
    SaveClientContact(body:any): Observable<any> {
      return this._http.post(`${environment.baseApiUrl}ClientContacts/Save`,body);
    }


    // <<<<<<<<<<<<<<<<<<<<< Notes Pipe  =====================================================================

    getNotes(){
      return this._http.get(`${environment.baseApiUrl}ClientNotes/GetByClient?clientId=${this.currentUser}`);
    }
  }
