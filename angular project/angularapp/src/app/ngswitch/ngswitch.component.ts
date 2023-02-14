import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  selectedProduct:string;
  arrayOfCourses:any[]=[
    {
      id:1,
      desc:'Angular core deep Dive',
      iconURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
      category:'INTERMEDIATE'
    },
    {
      id:2,
      desc:'javascript zero to hero',
      iconURL:'https://static.javatpoint.com/images/javascript/javascript_logo.png',
      category:'BEGINNER'
    },
    {
      id:3,
      desc:'typescript',
      iconURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
      category:'ADVANCED'
    },
    {
      id:4,
      desc:'HTML',
      iconURL:'https://e7.pngegg.com/pngimages/840/443/png-clipart-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-thumbnail.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  getProductValue(val){
    this.selectedProduct=val.target.value;
  }

}
