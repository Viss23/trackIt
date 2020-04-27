import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ModalModule} from './_modal';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

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
import { JwtInterceptor,ErrorInterceptor} from './_helpers'


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
    MaterialModule,
    ModalModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
