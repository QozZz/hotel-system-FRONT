import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HotelDto} from '../shared/models/HotelDto';
import {Constants} from '../../Constants';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private url = `${Constants.apiUrl}/api/hotels`;

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<HotelDto[]> {
    return this.http.get<HotelDto[]>(`${this.url}`, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('Authorization'),
      })
    });
  }

  getById(id: number): Observable<HotelDto> {
    return this.http.get<HotelDto>(`${this.url}/${id}`, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('Authorization'),
      })
    });
  }

}
