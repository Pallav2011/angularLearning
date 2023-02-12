import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  title:string='Top Bollywood Movies';

  movieObj:Movie[]=[
    {title:'3 idiots',director:'Rajkumar',cast:'Amir',releaseDate:'2009'},
    {title:'Tumbad',director:'Rahil',cast:'Rahi',releaseDate:'2020'},
    {title:'Pathan',director:'Siddharth',cast:'Sharukh',releaseDate:'2023'},
    {title:'Kantara',director:'Rishabh',cast:'Rishabh',releaseDate:'2022'},
    {title:'Drishyam 2',director:'Abhishek',cast:'Ajay',releaseDate:'2022'},
    {title:'Dangal',director:'Tiwari n.',cast:'Amir',releaseDate:'2016'},
    {title:'KGF Chapter 2',director:'Prashant n.',cast:'Yash',releaseDate:'2022'},
  ]

  arrayOfSongs=['Radha hi Bavari','Jeew Rangala','Sairat zal ji','Galavar khali','Apsara ali'];

  arrayOfCountry=['India','America'];
  arrayOfStates=['Maharashtra','california'];

  constructor() { }

  ngOnInit() {
  }


}
