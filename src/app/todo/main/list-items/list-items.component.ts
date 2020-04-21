import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { interval, Subscription, SubscriptionLike } from 'rxjs';
import {switchMap,tap,map} from 'rxjs/operators';
import { Todo } from 'src/app/todo.model';


@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit,OnDestroy {
  tasks : Array<Todo> =[] ;
  sub : SubscriptionLike;

  constructor(private todoService:TodoService) { }


  ngOnInit(): void {
       this.sub=this.todoService.datas.subscribe((state) => this.tasks=state)
     
  }

  ngOnDestroy() { 
    if (this.sub){
      this.sub.unsubscribe();
      this.sub=null
    }
  }

  
  fun(){
    console.log(this.tasks);
    console.log(this.sub)
  }
 


}
