import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Task'; // Task interface
import { TASKS } from '../mock-tasks'; // mock tasks from file, will be replaced with tasks from server

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  // this service returns Task array for the front end
  //* for just a file
  // getTasks(): Task[] {
  //   return TASKS;
  // }

  // this service returns Task array for the front end
  //* utilizes observable
  // define the return type as an observable which resolves to a Task array
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
