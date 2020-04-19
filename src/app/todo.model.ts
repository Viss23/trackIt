export class Todo {
  text:string;
  project:string | null;
  mark:string | null;
  priority: number;
  date: number;
  id:string;


  constructor(text:string,project:string|null =null,mark:string|null = null,priority:number = 4) {
    this.text=text;
    this.project=project;
    this.mark=mark;
    this.priority=priority;
    this.date = Date.now();
    this.id="id" + Math.random().toString(16).slice(2) ;
  }
}