import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../model/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  newTask: string;

  constructor(private tasksTaskservice: TasksService){}

  add(){
    const task: Task = {name: this.newTask, created: new Date()};
    this.tasksTaskservice.add(task);
    this.newTask = '';
  }

}
