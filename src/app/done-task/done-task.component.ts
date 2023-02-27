import { Component, Input } from '@angular/core';
import { Task } from '../model/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent {
  
  tasksDone: Array<Task> = [];

  constructor(private tasksTaskservice: TasksService){
    this.tasksTaskservice.getTasksDoneObs().subscribe((tasks: Array<Task>) => {
      this.tasksDone = tasks;
    });
  }
}
