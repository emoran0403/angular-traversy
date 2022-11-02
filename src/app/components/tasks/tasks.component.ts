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

  // // this runs once when the class is initialized
  // ngOnInit(): void {
  //   // get the tasks from the task service, setting the tasks to this.tasks
  //   //* this is ok since we are just bringing in a file, we use an observable to make fetches and for other anync behavior
  //   this.tasks = this.taskService.getTasks();
  // }

  // this runs once when the class is initialized
  ngOnInit(): void {
    // get the tasks from the task service
    //get tasks returns an Observable, which we need to subscribe to
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));

    // Observable.subscribe((data) => doSomethingWith(data))
    // is similar to
    // Promise.then((res) => doSomethingWith(res))
  }
}
