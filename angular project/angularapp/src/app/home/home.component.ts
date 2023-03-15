import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
  }

  createPost(){
    this.firebaseService.createPosts().subscribe(res=>{
      console.log('data',res);
      
    })
   }

   getData(){
    this.firebaseService.getPost().subscribe(res=>{
      console.log('getData',res);
      
    })
   }

}
