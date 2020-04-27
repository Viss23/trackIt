import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import {map,tap, distinct} from 'rxjs/operators'
import { Xmb } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AviableModifiers {
  
  private aviableprojects: BehaviorSubject<Array<string>> = new BehaviorSubject(['Входящие','Личное','Покупки','Работа','Заданя']) ;
  private aviablemarks: BehaviorSubject<Array<string>> = new BehaviorSubject(['Метка 1','Метка 2']) ;
  private aviablepriorities: BehaviorSubject<Array<string>> = new BehaviorSubject(['Приоритет 1','Приоритет 2','Приоритет 3','Приоритет 4']) ;

  getProjects(){
    return this.aviableprojects.asObservable()
  }

  getMarks(){
    return this.aviablemarks.asObservable()
  }

  getPriorities(){
    return this.aviablepriorities.asObservable()
  }

  addProject(value:string){
    const oldState:Array<string> = this.aviableprojects.getValue();
    const newState= [...oldState,value]
    this.aviableprojects.next(newState)
  }

  addMark(value:string){
    const oldState:Array<string> = this.aviablemarks.getValue();
    const newState= [...oldState,value];
    this.aviablemarks.next(newState);
  }

  
}