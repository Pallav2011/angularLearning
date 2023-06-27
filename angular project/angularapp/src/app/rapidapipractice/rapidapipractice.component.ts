import { Component, OnInit } from '@angular/core';
import { RapidapipracticeService } from '../service/rapidapipractice.service';

@Component({
  selector: 'app-rapidapipractice',
  templateUrl: './rapidapipractice.component.html',
  styleUrls: ['./rapidapipractice.component.css']
})
export class RapidapipracticeComponent implements OnInit {

  constructor(private rapidapipract : RapidapipracticeService) { }

  ngOnInit() {
    this.rapidapipract.getfinanceData().subscribe(res=>{
      console.log('rapidapi responce',res);
      
    })
  }

}
