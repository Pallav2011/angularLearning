import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapipracticeService {

  url:'https://yh-finance.p.rapidapi.com/auto-complete?q=tesla&region=US';
  constructor(private httpclient : HttpClient) { }

  getfinanceData(){
    let headers= new HttpHeaders({
      'X-RapidAPI-Key': '6b1efdf6f1mshfa486da6f836e4ap1dd41djsn862f0fd8fff1',
		  'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
    });
   return this.httpclient.get(this.url, { headers :headers });
  }

}
