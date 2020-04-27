import { Injectable } from '@angular/core';
import { Todo } from './todo.model'
import { BehaviorSubject, Observable, from } from 'rxjs';
import {map,tap, distinct,filter} from 'rxjs/operators'
import { UserService } from './_services/user.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private userService:UserService){}
  //private data: BehaviorSubject<Array<Todo>> = new BehaviorSubject(Array(new Todo('fisrt task'),new Todo('second')) );
  //private displayedData:BehaviorSubject<Array<Todo>>=new BehaviorSubject(Array()) ;

  private data: BehaviorSubject<Array<Todo>> = new BehaviorSubject(Array() );
  private displayedData:BehaviorSubject<Array<Todo>>=new BehaviorSubject(Array()) ;

  get datas(){
    return  this.data.asObservable()
  }

  get displayedDatas(){
    return this.displayedData.asObservable()
  }
  

  getData () {
    return this.data.getValue()
  }

  getDisplayedData () {
    return this.displayedData.getValue()
  }

  addData (todo: Todo) {
    const oldValue = this.data.getValue();
     oldValue.push(todo);
    const newValue = oldValue;
    this.data.next(newValue)
    this.userService.updateData(newValue).subscribe(dat =>console.log(dat))
  }
 
  selectUnique(datatype:string):Observable<Array<string>>{
    let obs = this.datas.pipe(
    map( (data: Todo[]) => data.filter(val =>  typeof(val[`${datatype}`])==="string" )),
      map( (data:Todo[]) =>  data.map( val => val[`${datatype}`]) ),
      map( data => [...new Set(data)]),
    ) 
     return obs
  }

   filterTodos(datatype:string,id:string):Observable<any>{
    let obs = this.datas.pipe(
      map( (data: Todo[]) => data.filter(val =>  typeof(val[`${datatype}`])==="string" )),
        map( (data:any) =>  data.filter( val => val[`${datatype}`] === id) )
    )
    return obs
   }

   updateDisplayedData(todo:Todo[]){
     this.displayedData.next(todo)
   }

   updateData(todo:Todo[]){
     this.data.next(todo)
   }
  //refactor
}
