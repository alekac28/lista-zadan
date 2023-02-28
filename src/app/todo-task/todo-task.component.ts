import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../model/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent {
  
  tasksList: Array<Task> = [];

  constructor(private tasksTaskservice: TasksService){
    this.tasksTaskservice.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks;
    });
  }


  remove(task: Task){
    this.tasksTaskservice.remove(task);
  }

  done(task: Task){
    task.end = new Date();
    this.tasksTaskservice.done(task);
  }


}
