import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../service/wikipedia.service';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit {

  givenData={};
  constructor(private wikiservice:WikipediaService) { }

  ngOnInit() {
  }

  searchData(searchValue){
    this.wikiservice.searchData(searchValue.value).subscribe(res=>{
      this.givenData=res;  
    })
  }

}
