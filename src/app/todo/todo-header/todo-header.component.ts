import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {

  adding=false;
  newData='';
  constructor(private todoService:TodoService ) { }

  ngOnInit(): void {
  }
  
  addItem(){
    this.todoService.addItem(this.newData);
    console.log(this.todoService.getData())
    this.adding= !this.adding;
  }

  test(){
    console.log(this.todoService.getProjects())
  }
}
