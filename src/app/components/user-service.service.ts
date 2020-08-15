import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<string> {
    const name = 'u';
    const pass = 'u';
    const headers = new HttpHeaders({authorization: 'Basic ' + btoa(name+ ':' +pass) });


    return this.httpClient.get<string>('http://localhost:8081/data',{headers, responseType: 'text'as'json'} );
  }
}
