import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class NotesModuleApiService {
  baseApiUrl = environment.baseApiUrl
  constructor(private _http: HttpClient) {}

  searchClient(data:any): Observable<any> {
    return this._http.post(`${environment.baseApiUrl}Client/SearchClientList`, data);
  }
  ClientLockDocument(data:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}Client/ClientLockDocument?clientId=${data}`,);
  }
  MemoDocument(data:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}Client/MemoDocument?clientId=${data}`);
  }
  UploadClientPic(id:any,data:any): Observable<any> {
    return this._http.post(`${environment.baseApiUrl}Client/UploadClientPic?clientId=${id}`,data);
  }
  ClientGeneralDetails(data:any): Observable<any> {
    return this._http.get(`${environment.baseApiUrl}Client/GetClientGeneralDetails?clientId=${data}`);
  }
  getByClient(id:any){
    return this._http.get(`${environment.baseApiUrl}ClientNotes/GetByClient?clientId=${id}`);
  }
  }