import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hotel} from '../shared/models/Hotel';
import {Constants} from '../../Constants';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private url = `${Constants.apiUrl}/api/hotels`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.url}`);
  }

}
