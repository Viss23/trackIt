import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { TodoService } from '../todo.service';
import {first,map} from 'rxjs/operators'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private userService:UserService,private todoService:TodoService) { }

  ngOnInit(): void {
    this.userService.getCurrent().pipe(
      first(),
    ).subscribe(data=> {
      this.todoService.updateData(data.data);
      this.todoService.updateDisplayedData(data.data)
    })
  }

  test(){
    console.log(this.todoService.getDisplayedData())
  }
  

}
