import { Component, Input } from '@angular/core';
import { Task } from '../../model/Task';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  @Input() todoItem ! : Task;

}
