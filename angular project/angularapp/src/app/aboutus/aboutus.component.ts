import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../service/rapidapi.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  apiData={};
  constructor(private rapidapiService: RapidapiService) { }

  ngOnInit() {
    this.rapidapiService.getFinance().subscribe(res=>{
      console.log('responce',res);
      this.apiData=res;     
    })
  }
}
