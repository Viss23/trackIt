import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

   data: Array<string> = [];

  constructor() { }

  addItem(item:string){
     this.data.push(item);
  }

  getData (){
    return this.data.slice();
  }

}
