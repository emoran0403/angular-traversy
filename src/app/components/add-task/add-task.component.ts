import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  // define a new output event emitter for adding a new task - this will be captured by the parent component
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  // with the current ts config settings, I need to assert these values will have a value if I don't define them here
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    // set the subscription to the ui service, and when a
    this.subscription = uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    // little input validation
    if (!this.text) {
      alert('Please add a task');
      return;
    }

    if (!this.day) {
      alert('Please add a time');
      return;
    }

    // create a new task object to be emitted and submitted to the server
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // emit event
    this.onAddTask.emit(newTask);

    // clear the form
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
