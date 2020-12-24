import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../../Constants';
import {LoginDto} from '../shared/models/LoginDto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  private url = `${Constants.apiUrl}/api/auth`;

  login(loginDto: LoginDto): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, loginDto, {observe: 'response'});
  }

  signUp(loginDto: LoginDto): Observable<any> {
    return this.http.post<any>(`${this.url}/sign-up`, loginDto, {observe: 'response'});
  }

}
