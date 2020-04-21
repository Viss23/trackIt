import { Component, OnInit,ChangeDetectorRef,AfterViewInit} from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { Todo } from 'src/app/todo.model';
import { AviableModifiers } from 'src/app/aviableModifiers.service';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit,AfterViewInit {

  adding=false;
  text='';
  project='sdad';
  projects$ = this.aviableModifiers.getProjects();
  mark;
  marks$ = this.aviableModifiers.getMarks()
  priority:string;

  constructor(private todoService:TodoService,private aviableModifiers:AviableModifiers,private cdr:ChangeDetectorRef ) { }

  ngOnInit(): void {
    /* this.aviableModifiers.getProjects().subscribe( (res) =>{
      setTimeout(() => this.projects = res, 10)
    }) */
  }
  
 /*  addItem(){
    this.todoService.addItem(this.newData);
    console.log(this.todoService.getData())
    this.adding= !this.adding;
  } */

  ngAfterViewInit(){
    this.cdr.detectChanges();
  }

  addItem(text:string,project?:string,mark?:string,priority?:string){
    const todo = new Todo(text,project,mark,priority);
   this.todoService.addData(todo)
   console.log(this.todoService.getData())
 } 

 detectChanges(){
  this.cdr.detectChanges();
 }

  
}
