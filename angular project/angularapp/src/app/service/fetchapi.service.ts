import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchapiService {

  apiUrl='https://jsonplaceholder.typicode.com/todos/1';

  constructor( private httpclient:HttpClient) { }

  getData(){
   return this.httpclient.get(this.apiUrl);
  }

}
