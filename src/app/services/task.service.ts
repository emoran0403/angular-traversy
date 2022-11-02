import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task'; // Task interface

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // enable the class to use the HttpClient by passing it into the constructor
  constructor(private http: HttpClient) {}
  // define a private api url for task service to enable it to make calls to our json db file
  private apiUrl: string = 'http://localhost:5000/tasks';

  // this service returns Task array for the front end
  //* for just a file
  // getTasks(): Task[] {
  //   return TASKS;
  // }

  // this service returns Task array for the front end
  //* utilizes observable
  // define the return type as an observable which resolves to a Task array
  // getTasks(): Observable<Task[]> {
  //   const tasks = of(TASKS);
  //   return tasks;
  // }

  getTasks(): Observable<Task[]> {
    // when the getTask method is called, return a call to the HttpModule,
    // which will make a get request to the apiUrl specified here
    // and define the return type as an observable with a Task[]
    return this.http.get<Task[]>(this.apiUrl);
  }
}
