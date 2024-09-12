import { Routes } from "@angular/router";
import { MemberListComponent } from "./member-list/member-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { ListsComponent } from "./lists/lists.component";
import { HomeComponent } from "./Home/Home.component";

export const appRoutes: Routes=[
    {path: 'home', component: HomeComponent},
    {path: 'member', component: MemberListComponent},
    {path: 'messages', component: MessagesComponent},
    {path: 'lists', component: ListsComponent},
    {path:'**', redirectTo:'home', pathMatch:"full"},

]