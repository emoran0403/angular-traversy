import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task'; // Task interface

// define the http headers options to be used when making put and post requsts
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

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

  deleteTask(task: Task): Observable<Task> {
    // define the url by interpolating the task id with the apiUrl
    const url = `${this.apiUrl}/${task.id}`;
    // return a call to the HttpClient, passing in a delete request to the apiUrl with the id from the task object
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    // define the url by interpolating the task id with the apiUrl
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  /**
   * this service function is used for adding a task to the db
   * makes a post req
   * @param task a task object, which will be added to the db
   * @returns an observable
   */
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
