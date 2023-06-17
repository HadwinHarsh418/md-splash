import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StaticService } from './staticdata.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Role, User } from '../models';
import { AuthenticationService } from '../auth/authentication.service';
import { localToastService } from './toaster.service';


@Injectable({ providedIn: 'root' })
export class ApiService {
  defaultUserImage = 'assets/images/top-img.jpg';
  currentUser:User;
  public appVersion = '';

  /**
   *
   * @param {HttpClient} _http
  */


  constructor(private _http: HttpClient, private staticService: StaticService,
    private  localToast:localToastService,
    private location: Location,
    private router: Router,private authService:AuthenticationService) {
    this.currentUser = this.authService.currentUserValue;
    this.authService.currentUser.subscribe(
      x => {
        if(x) {
          this.currentUser = x;
        }
      }
    )
  }


  back() {
    this.location.back();

  }


  login(data:any): Observable<any> {
    // data.token = 'dasdhgashdasd236543256';
    // return of({ response: data });
    return this._http.post(`${environment.baseApiUrl}account/login`, data);
  }

  getUserById(user_id:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}getUserById/${user_id}`);
  }

  validateEmail(data:any): Observable<any> {
    return this._http.post(`${environment.baseApiUrl}Login`, data);
  }

  sendLink(data:any): Observable<any> {
    return this._http.post(`${environment.baseApiUrl}Login`, data);
  }
  getResetPasswordToken(data:any): Observable<any> {
    return this._http.post(`${environment.baseApiUrl}Login`, data);
  }

  resetPassword(data:any): Observable<any> {
    return this._http.post(`${environment.baseApiUrl}Login`, data);
  }

  order(data:any): Observable<any> {
    return this._http.post(`${environment.baseApiUrl}order`, data);
  }

  updateUser(data:any): Observable<any> {
    return this._http.post(`${environment.baseApiUrl}updateUser`, data);
  }

  loadReviews(product:any): Observable<any> {
    return of({ status: true, result:this.staticService.reviews});
    // return this._http.get(`${environment.baseApiUrl}/loadReviews/${product}`);
  }

  addReview(review:any): Observable<any> {
    this.staticService.reviews.push(review);
    return of({ status: true, result:[]});
    // return this._http.get(`${environment.baseApiUrl}/loadReviews/${product}`);
  }

  getUserAddresses(user_id) {
    this.getUserById(user_id).subscribe(
      res => {
        let user = JSON.parse(JSON.stringify(this.authService.currentUserValue));
        if(res.status && res.result?.user_id == user.user_id){
          Object.assign(user, res.result);
          if(user.billing_address) {
            user.billing_address = JSON.parse(user.billing_address)
          }
          if(user.install_address) {
            user.install_address = JSON.parse(user.install_address)
          }
          this.authService.updateTokenValue(user);
        }
      }
    )
  }


  getalluser():Observable<any>{
    return this._http.get(`${environment.baseApiUrl}getAllUser`)
  }


  // -------------------------------- Assignments Tab Api ------------------------------------------

  SaveAssignedClinician(data:any): Observable<any> {
    return this._http.post(`${environment.baseApiUrl}ClientAssignments/SaveAssignedClinician`, data);
  }
  SaveAssignedDoctor(data:any): Observable<any> {
    return this._http.post(`${environment.baseApiUrl}ClientAssignments/SaveAssignedDoctor`, data);
  }
  SavePRPClinician(data:any): Observable<any> {
    return this._http.post(`${environment.baseApiUrl}ClientAssignments/SavePRPClinician`, data);
  }
  SaveMobileClinician(data:any): Observable<any> {
    return this._http.post(`${environment.baseApiUrl}ClientAssignments/SaveMobileClinician`, data);
  }
  SaveIOPClinician(data:any): Observable<any> {
    return this._http.post(`${environment.baseApiUrl}ClientAssignments/SaveIOPClinician`, data);
  }
  SaveMobileResClinician(data:any): Observable<any> {
    return this._http.post(`${environment.baseApiUrl}ClientAssignments/SaveMobileResClinician`, data);
  }

  // -------------------------------- Assignments Tab Api For Get Data ------------------------------------------
  GetAssignedClinicians(data:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}ClientAssignments/GetAssignedClinicians?clientId=${data}`);
  }
  GetAssignedDoctors(data:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}ClientAssignments/GetAssignedDoctors?clientId=${data}`);
  }
  GetIOPAssignments(data:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}ClientAssignments/GetIOPAssignments?clientId=${data}`);
  }
  GetMobileAssignment(data:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}ClientAssignments/GetMobileAssignment?clientId=${data}`);
  }
  GetMobileResAssignments(data:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}ClientAssignments/GetMobileResAssignments?clientId=${data}`);
  }
  GetPRPAssignments(data:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}ClientAssignments/GetPRPAssignments?clientId=${data}`);
  }

  // -------------------------------- Assignments Tab Api For Delete  Data ------------------------------------------

  DeleteAssignedClinicians(data:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}ClientAssignments/DeleteAssignedClinician/${data}`);
  }
  DeleteAssignedDoctors(data:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}ClientAssignments/DeleteAssignedDoctor/${data}`);
  }
  DeleteIOPAssignments(data:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}ClientAssignments/DeleteIOPAssignment/${data}`);
  }
  DeleteMobileAssignment(data:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}ClientAssignments/DeleteMobileAssignment/${data}`);
  }
  DeleteMobileResAssignments(data:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}ClientAssignments/DeleteMobileResAssignment/${data}`);
  }
  DeletePrpPreviousAssignments(data:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}ClientAssignments/DeletePrpAssignment/${data}`);
  }

  // -------------------------------- Appointments Tab Api ------------------------------------------

  GetUpcomingAppointments(data:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}ClientAppointments/GetUpcomingAppointments/${data}`);
  }
  GetPastAppointments(data:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}ClientAppointments/GetPastAppointments/${data}`);
  }


}
