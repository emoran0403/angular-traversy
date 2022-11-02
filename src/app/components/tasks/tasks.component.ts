import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task'; // Task interface
import { TASKS } from '../../mock-tasks'; // mock tasks from file, will be replaced with tasks from server

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  // for now, define tasks, and set that to the tasks from the mock file
  tasks: Task[] = TASKS;
  constructor() {}

  ngOnInit(): void {}
}
