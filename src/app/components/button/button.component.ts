import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  /**
   * since we want to make this button component reusable,
   * we are allowing the button text and the button background color to be set
   * when we use the component elsewhere
   */
  @Input() text!: string;
  @Input() color!: string;

  /**
   * define the output for this component, which will be an event emitter
   * ? this is how we can pass events/data up to parent components
   * btnClick will be the name of the custom event we have just defined
   */
  @Output() btnClick = new EventEmitter();

  constructor() {}

  // this is like a useEffect with an empty dependency array.
  // this will run when the component is initialized
  ngOnInit(): void {}

  //@ functions defined here will be available to all instances of this component
  // when we have an onclick event, it will emit the our btnClick custom event
  onClick() {
    // console.log('add');
    this.btnClick.emit();
  }
}
