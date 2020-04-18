import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { ListItemsComponent } from './todo/list-items/list-items.component';
import { ItemComponent } from './todo/list-items/item/item.component';
import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {RandomColorDirective} from './header/random-color.directive';
import { LeftMenuComponent } from './todo/left-menu/left-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    ListItemsComponent,
    ItemComponent,
    TodoHeaderComponent,
    RegisterComponent,
    LoginComponent,
    RandomColorDirective,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
