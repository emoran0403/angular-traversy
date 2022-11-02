import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  // onDelete is a function that will be called when the red x is clicked
  onDelete(task: Task) {
    // console.log({ task });
    // it will emit the event to the parent component, passing along the task that is to be deleted
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    // emit this event to the parent component
    this.onToggleReminder.emit(task);
  }
}
