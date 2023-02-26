import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-zadan';
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  add(task: string){
    this.tasksList.push(task);
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
