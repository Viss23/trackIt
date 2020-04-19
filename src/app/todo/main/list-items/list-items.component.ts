import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { interval } from 'rxjs';
import {switchMap,tap,map} from 'rxjs/operators';
import { Todo } from 'src/app/todo.model';


@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  tasks : Array<Todo> =[] ;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
     /* interval(1000).pipe(
      map ( () => this.todoService.getData())
    ).subscribe(result => this.tasks=result )  */
      interval(1000).subscribe( () => this.tasks=this.todoService.getData())
     

  }

  
  fun(){
    console.log(this.tasks)
  }
 


}
