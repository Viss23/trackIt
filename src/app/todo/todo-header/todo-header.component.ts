import { Component, OnInit,ChangeDetectorRef,AfterViewInit,ViewEncapsulation} from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { Todo } from 'src/app/todo.model';
import { AviableModifiers } from 'src/app/aviableModifiers.service';
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TodoHeaderComponent implements OnInit{

  adding=false;
  newTaskText='';
  selectedProject: string|null = null;
  projects$ = this.aviableModifiers.getProjects();
  selectedMark: string|null = null;
  marks$ = this.aviableModifiers.getMarks()
  markInput=''
  selectedPriority:string;
  priorities$=this.aviableModifiers.getPriorities();
  projectInput='';
  
  constructor(private todoService:TodoService,
    private aviableModifiers:AviableModifiers,
    private cdr:ChangeDetectorRef,
    private modalService:ModalService ) { }

  ngOnInit(): void {
   
  }
  

  

  addItem(text:string,project?:string | null,mark?:string | null,priority?:string){
    const todo = new Todo(text,project,mark,priority);
   this.todoService.addData(todo)
   console.log(this.todoService.getData())
 } 

 detectChanges(){
  this.cdr.detectChanges();
 }

 openModal(id: string) {
  this.modalService.open(id);
}

closeModal(id: string) {
  this.modalService.close(id);
}

addProject(value:string){
  this.aviableModifiers.addProject(value);
  this.projectInput='';
  this.cdr.detectChanges();
}

cancelProject(){
  this.projectInput='';
}

addMark(value:string){
  this.aviableModifiers.addMark(value);
  this.markInput='';
  this.cdr.detectChanges();
}

cancelMark(){
  this.markInput='';
}
  
}
