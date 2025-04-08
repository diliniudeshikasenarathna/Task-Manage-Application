import { Component } from '@angular/core';
import { TaskService } from '../../service/TaskService';  // Ensure correct path to TaskService
import { Task } from '../../model/Task';  // Ensure correct path to Task model
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  title: string = '';  // Task title input
  description: string = '';  // Task description input
  status: string = 'TO_DO';  // Default status for the task

  constructor(private taskService: TaskService) {}

  addTask() {
    // Check if the title is provided
    if (!this.title) {
      console.error('Title is required');
      return;  // Exit if title is missing
    }

    // Set the createdAt to the current date and time
    const createdAtDate = new Date();  // Current date and time

    // Prepare the new task object with the provided values
    const newTask: Task = {
      title: this.title,
      description: this.description,  // Optional description
      status: this.status,  // Status of the task
      createdAt: createdAtDate  // Current date and time
    };

    // Call the TaskService to add the new task
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
