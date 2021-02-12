import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-child',
  template: `
    <div [ngStyle]="{'background-color':'orange', 'color':'white','margin-left':'15px','margin-right':'15px','padding-left':'15px'}">
    <p>
      child works!
    </p>
    <P>{{fromChiled}}</P>
    </div>
    
    
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
