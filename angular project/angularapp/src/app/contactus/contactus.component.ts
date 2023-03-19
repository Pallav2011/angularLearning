import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../service/rapidapi.service';
import { WikipediaService } from '../service/wikipedia.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  givenData={};
  constructor(private wikiservice:WikipediaService) { }

  ngOnInit() {
  }

  searchData(searchValue){
    this.wikiservice.searchData(searchValue.value).subscribe(res=>{
      console.log('wikipedia data',res);
      this.givenData=res;  
      
    })
  }

}
