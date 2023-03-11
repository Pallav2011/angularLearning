import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  userName;
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res => {
      console.log('comp4', res);
      this.userName = res;
    });
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
