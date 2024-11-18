import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  apiUrl:string = 'https://fake-json-api.mock.beeceptor.com/users';
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {console.log("gooooo")
    return this.httpClient.get<any>(this.apiUrl);
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}/add`, user);
  }

  editUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/edit`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/delete/${id}`);
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/user/${id}`);
  }
}
