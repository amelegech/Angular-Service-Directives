import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from './users.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angularDem';

  message:String = "Message from parent!"
 
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
