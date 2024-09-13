import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ChildOfCardComponent } from './childOfCard/childOfCard.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './Home/Home.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [									
    AppComponent,
      CardComponent,
      ChildOfCardComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent,
      NavComponent,
      HomeComponent,
      HomeComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
