import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent {
  
  @Input()
  tasksList = [];
  @Output()
  emitRemove = new EventEmitter<string>();
  @Output()
  emitDone = new EventEmitter<string>();
  

  remove(task: string){
    this.emitRemove.emit(task);
  }

  done(task: string){
    this.emitDone.emit(task);
  }


}
