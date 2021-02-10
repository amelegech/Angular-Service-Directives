import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!
    </p>
    <P>{{fromChiled}}</P>
    
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {
 
@Input() fromChiled:String;


  constructor() { }
  
  ngOnInit(): void {
  }

}
