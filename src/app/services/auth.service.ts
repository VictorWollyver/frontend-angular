import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.API_URL + "/auth"

  htpp = inject(HttpClient)

  constructor() { }

  login(name: any, password: any) {
    return this.htpp.post<{data: {token: string}}>(this.baseUrl + "/login", { name, password });
  }
}
