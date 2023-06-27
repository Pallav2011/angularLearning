import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'console';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // apiUrl = "http://localhost:3000/IdAndTitle";
  todoapi="https://jsonplaceholder.typicode.com/posts";

  //DI 
  constructor(private httpClient: HttpClient) { }

  // Create method 

  create(data: any) : Observable<any> {
    return this.httpClient.post(this.todoapi, data);
  }

  // read 

  list() {
   return this.httpClient.get(this.todoapi);
  }

  // update 

  update(id: any, data: any) {
    let API_URL = `${this.todoapi}/${id}`;
   return this.httpClient.put(API_URL, data);
  }

  // delete 

  delete(id: any) {
    let API_URL = `${this.todoapi}.json/${id}`;
    return this.httpClient.delete(API_URL);
  }

  getTodoData(){
    return this.httpClient.get(this.todoapi);
  }
}
