import { Component } from '@angular/core';
import { TaskService } from '../../service/TaskService';  
import { Task } from '../../model/Task'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  title: string = '';  
  description: string = '';  
  status: string = 'TO_DO';  

  constructor(private taskService: TaskService) {}

  addTask() {
    
    if (!this.title) {
      console.error('Title is required');
      return;  
    }

    
    const createdAtDate = new Date();  

    
    const newTask: Task = {
      title: this.title,
      description: this.description,  
      status: this.status,  
      createdAt: createdAtDate 
    };

    
    this.taskService.addTask(newTask).subscribe({
      next: (response) => {
        console.log('Task added successfully:', response);
      },
      error: (error) => {
        console.error('Error adding task:', error);
      },
      complete: () => {
        console.log('Task add operation completed.');
      }
    });
  }
}
