import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task'; // Task interface
import { TaskService } from 'src/app/services/task.service'; //  service to retrieve tasks

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  // for now, define tasks, and set that to the tasks from the mock file
  tasks: Task[] = [];

  // pass the TaskService to the constructor to make it available to the TasksComponent
  // define it as private, since this and only this class needs to use it
  constructor(private taskService: TaskService) {}

  // this runs once when the class is initialized
  ngOnInit(): void {
    // get the tasks from the task service
    //get tasks returns an Observable, which we need to subscribe to
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));

    // Observable.subscribe((data) => doSomethingWith(data))
    // is similar to
    // Promise.then((res) => doSomethingWith(res))
  }

  // this function updates the tasks list above when a delete task function is called
  // another function handles removing it from the db, this handles removing it from the screen
  // it filters out the task on screen whose ID matches that of the deleted task
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  // this function toggles the reminder boolean, which is used to conditionally add a border to the task items
  // it will not make a call to db.json
  toggleReminder(task: Task) {
    // invert the reminder boolean
    task.reminder = !task.reminder;
    // call the updateTaskReminder function on taskService and subscribe
    //! make sure to actually call subscribe lol
    // DO   => subscribe()
    // DONT => subscribe
    this.taskService.updateTaskReminder(task).subscribe();
  }
}
