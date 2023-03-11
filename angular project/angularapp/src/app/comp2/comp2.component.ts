import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  userName;
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res => {
      console.log('comp2', res);
      this.userName = res;
    })
   }

  ngOnInit() {
  }

  arrayOfValue=[];
  updateUserName(uname,email)
  {
    this.arrayOfValue[0] = uname.value;
    this.arrayOfValue[1] = email.value;
    // console.log(uname.value);
    this._utilityService.userName.next(this.arrayOfValue);
  }
}
