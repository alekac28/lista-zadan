import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-zadan';
  newTask: string;
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  add(){
    this.tasksList.push(this.newTask);
    this.newTask="";
    console.log(this.tasksList);
  }

  remove(task: string){
    // this.tasksList = this.tasksList.filter(e => e!==task);
    const index: number = this.tasksList.indexOf(task);
    this.tasksList.splice(index, 1);
  }

  done(task: string){
    this.tasksDone.push(task);
    this.remove(task);
  }

}
