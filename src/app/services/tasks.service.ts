import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../model/task";
import { HttpService } from "./http.service";

@Injectable()
export class TasksService{

    title = 'lista-zadan';
  // private tasksList: Array<Task> = [];
  // private tasksDone: Array<Task> = [];


  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  // 

  constructor(private httpService: HttpService){
    const tasksList=[];
    this.tasksListObs.next(tasksList);
  }

  add(task: Task){
    const list = this.tasksListObs.getValue();
    list.push(task);
    this.tasksListObs.next(list);
  }

  remove(task: Task){
    // this.tasksList = this.tasksList.filter(e => e!==task);
    const index: number = this.tasksListObs.getValue().indexOf(task);
    this.tasksListObs.getValue().splice(index, 1);
    this.tasksListObs.next(this.tasksListObs.getValue());
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