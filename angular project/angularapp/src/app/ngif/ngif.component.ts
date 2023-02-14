import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  posts=[
    {
      title:'neat Tree',
      imageUrl:'https://w0.peakpx.com/wallpaper/960/845/HD-wallpaper-nature-landscape-landscape-nature-thumbnail.jpg',
      content:'i saw this tree'
    },
    {
      title:'Bambu Tree',
      imageUrl:'https://i.pinimg.com/736x/be/33/76/be3376b0f835a1766cb7a95003ea4a7d.jpg',
      content:'i saw this tree'
    },
    {
      title:'Mango Tree',
      imageUrl:'https://i.pinimg.com/736x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg',
      content:'i saw this tree'
    },
    {
      title:'Apple Tree',
      // imageUrl:'https://w0.peakpx.com/wallpaper/2/755/HD-wallpaper-nature-beautiful.jpg',
      content:'i saw this tree'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
