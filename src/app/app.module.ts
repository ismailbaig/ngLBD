import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      {path:"", component: HeaderComponent},
      {path:"about", component:AboutComponent},
      {path:"contact", component:ContactComponent},
      // {path:"manage", component: ManageComponent, canActivate: [LoginGuard]},
      // {path:"login", component: LoginComponent},
      // {path:"logout", component: LogoutComponent},
      // {path:"error", component: ErrorComponent},
      {path:"**", component: NotfoundComponent}
    ], {useHash: true}) //useHash makes sure that each url request doesnot go to the server
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
