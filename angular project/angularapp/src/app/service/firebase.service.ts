import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  url = 'https://angular-42730-default-rtdb.firebaseio.com/';

  //DI 
  constructor(private httpClient: HttpClient) { }


   createPosts() {
    let postData = {
      title: 'This is firebase example',
      content: 'We are calling angular post method'
    }
   return this.httpClient.post(this.url + 'posts.json', postData);
   }

   getPost(){
    return this.httpClient.get(this.url + 'posts.json');
   }
}