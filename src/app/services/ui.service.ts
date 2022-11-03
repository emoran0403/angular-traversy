import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  // holds 'state' of the add task button, allowing us to conditionally render components later
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  // function to toggle the show add task boolean
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  // allows for subscribing to the showAddTask boolean
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
