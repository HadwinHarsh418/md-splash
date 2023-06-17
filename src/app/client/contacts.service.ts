import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  baseApiUrl = environment.baseApiUrl
  constructor(private _http: HttpClient) {}

  addContact(data:any): Observable<any> {
    return this._http.post(`${environment.baseApiUrl}ClientContacts/Save`, data);
  }
  getContactsById(Id:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}ClientContacts/GetByClient/{id}=${Id}`);
  }
}
