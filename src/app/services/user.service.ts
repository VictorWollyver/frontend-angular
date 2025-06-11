import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IUser {
  id: number;
  name: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = environment.API_URL + "/users"

  private http = inject(HttpClient);

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseUrl);
  }

  postUser({name, password}: {name: string; password: string}): Observable<IUser> {
    console.log(name, password)
    return this.http.post<IUser>(this.baseUrl + "/create", {name, password})
  }
}
