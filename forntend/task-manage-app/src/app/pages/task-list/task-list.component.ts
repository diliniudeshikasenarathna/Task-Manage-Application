import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { TodoItemComponent } from "../../common/todo-item/todo-item.component";
import { InProgressItemComponent } from "../../common/in-progress-item/in-progress-item.component";
import { DoneItemComponent } from "../../common/done-item/done-item.component";
import { HttpClient } from '@angular/common/http';
import { takeLast } from 'rxjs';
import { Task } from '../../model/Task';
import { TaskService } from '../../service/TaskService';

@Component({
  selector: 'app-task-list',
  imports: [NgFor,TodoItemComponent,InProgressItemComponent,DoneItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  constructor(private http:HttpClient, private taskService:TaskService){
    this.loadTaskDetails();
  }

  taskList:Task[]=[];
 
  loadTaskDetails(){
    this.taskService.loadAllTask().subscribe((taskList:Task[])=>{
      this.taskList=taskList;
      console.log(taskList);
    })
  }
  get todoTasks() {
    return this.taskList.filter(task => task.status === 'TO_DO');
  }

  get inProgressTasks() {
    return this.taskList.filter(task=> task.status === 'In_Progress');
  }

  get doneTasks() {
    return this.taskList.filter(task => task.status === 'DONE');
  }
  


 

}
