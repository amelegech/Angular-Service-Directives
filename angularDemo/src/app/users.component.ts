import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  template: `
   
<div>
 
<h4 *ngIf= "hideShow; then msg1 else msg2"  > You can see this if the condition is true!  </h4>

<button (click)="myToggler()">Hide & Show</button>
<ng-template #msg1>ng-content is a content that embeded with the child component like the thext you embeded here is ngContent && ng-template is a directive represent an angular template</ng-template>
<ng-template #msg2>
  <section class="sec1">
  
    <div *ngFor= "let num of myNumbers" class="myNum" >
      {{num}}
      </div>
  </section>
  <section class="sec2">
    
    <div *ngFor= "let user of users" class="users">
      ID: {{user.id}} Title: {{user.title}} Completed:{{user.completed}}
       </div >
  </section>
   </ng-template>
</div> 


  `,
 styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {

  hideShow :boolean= true;
  myNumbers=[]
  public users  ;
  public subscribedUsers ;
  constructor(private service: UsersService){
for(let i=0; i<=100;i++){
  this.myNumbers.push(i)
}

  }

  myToggler(){
    this.hideShow = !this.hideShow
    
   

  }
  hideUsers(){
    this.users = !this.users
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
   this.subscribedUsers=  this.service.getUsers().subscribe((item)=>{
      this.users = item
      console.log("results",item);
      
    })
    
   
  }

  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    this.subscribedUsers.unsubscribe()
  }
  
  
  
}

