import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  //userName = new Subject<any>(); // observable
  // userDetail=['Pandurang','ranpisepg09@gmail.com']


  userName = new BehaviorSubject<any>(['Pandurang','abcd@gmail.com']);
  constructor() { }
}
