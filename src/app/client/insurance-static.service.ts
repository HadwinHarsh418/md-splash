import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceStaticService {
  subject: Subject<any> = new Subject<any>();
  observable: Observable<any> = this.subject.asObservable();

  constructor() { }
}
