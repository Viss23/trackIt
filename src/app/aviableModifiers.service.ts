import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import {map,tap, distinct} from 'rxjs/operators'
import { Xmb } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AviableModifiers {
  
  private aviablprojects: BehaviorSubject<Array<string>> = new BehaviorSubject(['project 1','project 2']) ;
  private aviablmarks: BehaviorSubject<Array<string>> = new BehaviorSubject(['marka1',' marka 2']) ;
  private aviablpriorities: BehaviorSubject<Array<string>> = new BehaviorSubject(['priora 1','priora 2']) ;

  getProjects(){
    return this.aviablprojects.asObservable()
  }

  getMarks(){
    return this.aviablmarks.asObservable()
  }

  getPriorities(){
    return this.aviablpriorities.asObservable()
  }
}