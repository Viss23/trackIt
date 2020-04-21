import { Injectable } from '@angular/core';
import { Todo } from './todo.model'
import { BehaviorSubject, Observable, from } from 'rxjs';
import {map,tap, distinct} from 'rxjs/operators'
import { Xmb } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  /* private data: Array<Todo> = [
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
  } */

  private data: BehaviorSubject<Array<Todo>> = new BehaviorSubject(Array(new Todo('fisrt task'),new Todo('second')) );

  /* addItem(item:string) :Observable{
    this.data.next(new Todo(item))
  } */

  get datas(){
    return  this.data.asObservable()
  }
  

  getData () {
    return this.data.getValue()
  }

  addData (todo: Todo) {
    const oldValue = this.data.getValue();
    oldValue.push(todo);
    this.data.next(oldValue)
  }
 
  selectUnique(datatype:string):Observable<Array<string>>{
    let obs = this.datas.pipe(
    map( (data: Todo[]) => data.filter(val =>  typeof(val[`${datatype}`])==="string" )),
      map( (data:Todo[]) =>  data.map( val => val[`${datatype}`]) ),
      map( data => [...new Set(data)]),
    ) 
     return obs
  }
}
