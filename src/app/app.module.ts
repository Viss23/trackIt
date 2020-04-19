import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { ListItemsComponent } from './todo/main/list-items/list-items.component';
import { ItemComponent } from './todo/main/list-items/item/item.component';
import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {RandomColorDirective} from './header/random-color.directive';
import { LeftMenuComponent } from './todo/left-menu/left-menu.component';
import { MainComponent } from './todo/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

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
    LeftMenuComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
