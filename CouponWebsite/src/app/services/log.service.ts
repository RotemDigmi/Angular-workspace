import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientType } from '../models/client-type.model';
import { LoginItem } from '../models/login-item.model';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor(private httpClient: HttpClient) {}

  public login(
    clientType: ClientType,
    email: string,
    password: string
  ): Observable<LoginItem> {
    return this.httpClient.post<LoginItem>(
      'http://localhost:8080/api/login?clientType=' +
        clientType +
        '&email=' +
        email +
        '&password=' +
        password,
      null
    );
  }

  public logOut(): Observable<string> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders, responseType: 'text' as const };
    return this.httpClient.delete('http://localhost:8080/api/logOut', options);
  }
}
