import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { SubscriptionLike, Observable, Subscription } from 'rxjs';
import { map,tap,flatMap,filter } from 'rxjs/operators';
import { Todo } from 'src/app/todo.model';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit,OnDestroy {
  projects=[];
  priorities=[];
  marks=[];
  private subscriptions = new Subscription()
  


  constructor(private todoService:TodoService) {
    /* this.sub=this.todoService.datas.subscribe((state) => {
      state.forEach( (value) =>{
        if  (value.project){
          this.projects.push(value.project)
        }
        if  (value.priority){
          this.priorities.push(value.priority)
        }
        if  (value.mark){
          this.marks.push(value.mark)
        }
      })
    }) */
    
    
   }

  ngOnInit(): void {
    this.subscriptions.add(  this.todoService.selectUnique('project').subscribe( res =>{
      this.projects=res
    }))
    this.subscriptions.add(  this.todoService.selectUnique('priority').subscribe( res =>{
      this.priorities=res
    }))
    this.subscriptions.add(  this.todoService.selectUnique('mark').subscribe( res =>{
      this.marks=res
    }))
  }

  ngOnDestroy () {
     this.subscriptions.unsubscribe() 
}

}
