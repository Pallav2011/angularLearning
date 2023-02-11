import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  name:string="Pandurang";
  empCount;
  parentData="I am come from parent component";
  arrayofData=[
    {
      image:'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg',
      titleData:'Laptop',
      description:'This is a laptop.'
    },
    {
      image:'https://m.media-amazon.com/images/I/71KCwNV6MuL._SL1500_.jpg',
      titleData:'Mobile',
      description:'This is a Mobile.'
    }
  ]
  constructor(){
this.assignValue();
  }

  assignValue(){
this.empCount=10000;
  }
}
