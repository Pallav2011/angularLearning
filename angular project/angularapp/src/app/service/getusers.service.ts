import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';


@Injectable({
  providedIn: 'root'
})
export class GetusersService {
  url='https://jsonplaceholder.typicode.com/users';
  
  constructor(private http:HttpClient) { }

  getPost():Observable<any>{
    return this.http.get<Post>(this.url)
  }
  getUserById(id:number){
  return this.http.get(this.url+'/'+id);
  }
}
