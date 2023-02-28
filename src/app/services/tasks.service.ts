import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../model/task";

@Injectable()
export class TasksService{

    title = 'lista-zadan';
  private tasksList: Array<Task> = [];
  // private tasksDone: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  // 

  constructor(){
    this.tasksListObs.next(this.tasksList);
  }

  add(task: Task){
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  remove(task: Task){
    // this.tasksList = this.tasksList.filter(e => e!==task);
    const index: number = this.tasksList.indexOf(task);
    this.tasksList.splice(index, 1);
    this.tasksListObs.next(this.tasksList);
  }

  done(task: Task){
    task.end = new Date().toLocaleString();
    task.isDone=true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
    // this.tasksDone.push(task);
    // this.remove(task);
    // this.tasksDoneObs.next(this.tasksDone);
  }

  getTasksListObs(): Observable<Array<Task>>{
    return this.tasksListObs.asObservable();
  }

  // getTasksDoneObs(): Observable<Array<Task>>{
  //   return this.tasksDoneObs.asObservable();
  // }

}