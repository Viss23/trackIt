import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../environments/environment';
import { User } from '../_models';
import { Observable } from 'rxjs';
@Injectable({providedIn: 'root'})
export class UserService {
  constructor( private http :HttpClient){}

  authenticate(username:string,password:string){
    const body = {
      "username" :username,
      "password" : password
    }
    return this.http.post(`${environment.apiUrl}/users/authenticate`,body)
  }

  /* register(firstname:string,lastname:string,username:string,password:string){
    const body= {
      "firstName": firstname,
      "lastName":lastname,
      "username":username,
      "password":password
    } */
    register(user:User){
      console.log(user)
    return this.http.post(`${environment.apiUrl}/users/register`,user)
  }

  updateData(data){
    const {_id:id } = JSON.parse(localStorage.getItem("currentUser"))
    const body = {
      "data" : data
    }
    return this.http.put(`${environment.apiUrl}/users/${id}`,body)
  }

  test(){
    const {data:data} =JSON.parse(localStorage.getItem("currentUser"));
    return data
  }

  getCurrent():Observable<any>{

    return this.http.get(`${environment.apiUrl}/users/current`)
  }


 //router.get('/', getAll);
 //router.get('/current', getCurrent);
 //router.get('/:id', getById);
 //router.delete('/:id', _delete);
}