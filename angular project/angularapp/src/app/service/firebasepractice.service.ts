import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebasepracticeService {

  url='https://angularpractice2023-default-rtdb.firebaseio.com/';
  constructor(private httpclient : HttpClient) { }

  postMyDetails(val){
    // let myDetails={
    //   name : 'pandurang Ranpise',
    //   age : 25
    // }
    return this.httpclient.put(this.url+'myDetails.json',val)
  }

  getDetails(){
    return this.httpclient.get(this.url+'myDetails.json');
  }
}
