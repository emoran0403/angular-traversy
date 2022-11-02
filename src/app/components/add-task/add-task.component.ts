import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  // with the current ts config settings, I need to assert these values will have a value if I don't define them here
  text!: string;
  day!: string;
  reminder: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
