import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList;
  // DI 
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.listToDos();
  }

  createTodo() {
    let todo = {
      id: 202,
      title: `Format the data of firebase`
    }

    this.todoService.create(todo).subscribe((response) => {
      console.log('todo create', response);
      this.listToDos();
    }, (error => {
      console.log('error',error)
    }))
  }

  listToDos() {
    this.todoService.list().subscribe((res) => {
      console.log('getting Data',res)
      this.todoList=res ;
    }, (error=> {
      console.log(error);
    }))
  }

  editTodo(todo: any) {
    let editData = {
      id: new Date().getTime(),
      title: `Edited title`
    }

    this.todoService.update(todo.id, editData).subscribe(res=> {
      this.listToDos();
    })
  }

  deleteTodo(id: any) {
    this.todoService.delete(id).subscribe(res => {
      console.log('Record has been deleted',res);
      this.listToDos();
    })
  }

  todoapidata;
  showDeta(){
    this.todoService.getTodoData().subscribe(res=>{
      console.log(res);
      this.todoapidata=res;
    })
  }
}
