import { Injectable } from '@angular/core';
import { Todo } from './todo.model'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private data: Array<Todo> = [
    new Todo('fisrt task')
  ];

 

   //const id = "id" + Math.random().toString(16).slice(2)  

  //random id || probability of collision is not null

  constructor() { }

  addItem(item:string){
     this.data.push(new Todo(item));
  }

  getData (){
    return this.data.slice();
  }

  getProjects (){
   return this.data.map( (element) => element.project)
  }

}
