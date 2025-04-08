import { Component, Input } from '@angular/core';
import { Task } from '../../model/Task';

@Component({
  selector: 'app-done-item',
  imports: [],
  templateUrl: './done-item.component.html',
  styleUrl: './done-item.component.css'
})
export class DoneItemComponent {
  
  @Input()
  public doneItem !: Task;

}
