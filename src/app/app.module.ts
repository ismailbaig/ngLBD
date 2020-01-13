import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component'; // using in C# 
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { orderService } from './services/order.service';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { simpleReducer } from '../simple.reducer';



@NgModule({
  declarations: [ // Registration of components
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule, HttpModule,
    StoreModule.forRoot({ message: simpleReducer}),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25
    // }),
    
    RouterModule.forRoot([
      {path:"", component: HeaderComponent}, // Routing
      {path:"about", component:AboutComponent},
      {path:"contact", component:ContactComponent},
      {path:"orderdetls", component:ContactComponent},
      // {path:"manage", component: ManageComponent, canActivate: [LoginGuard]},
      // {path:"login", component: LoginComponent},
      // {path:"logout", component: LogoutComponent},
      // {path:"error", component: ErrorComponent},
      {path:"**", component: NotfoundComponent}
    ], {useHash: true}) //useHash makes sure that each url request doesnot go to the server
  ],
  providers: [orderService], // Registration of services
  bootstrap: [AppComponent] // Startup component
})
export class AppModule { }
