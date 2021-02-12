import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from "@angular/common/http";
import{RouterModule,Routes} from "@angular/router"

import { AppComponent } from './app.component';

import { ChildComponent } from './child.component';
import { UsersComponent } from './users.component';

const myRoutes: Routes =[
  {path:"", redirectTo: "home", pathMatch: 'full'},
  {path:"home", component:UsersComponent},
  {path: "prod",
loadChildren:()=> import('./product/product.module').then(m=>m.ProductModule) }
  
]
@NgModule({
  declarations: [
    AppComponent,
    
    ChildComponent,
    
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
