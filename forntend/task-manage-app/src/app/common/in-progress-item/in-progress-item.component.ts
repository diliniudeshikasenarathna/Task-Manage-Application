import { Component, Input } from '@angular/core';
import { Task } from '../../model/Task';

@Component({
  selector: 'app-in-progress-item',
  imports: [],
  templateUrl: './in-progress-item.component.html',
  styleUrl: './in-progress-item.component.css'
})
export class InProgressItemComponent {

  @Input()
  public inProgressItem !: Task;
}
