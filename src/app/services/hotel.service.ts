import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HotelDto} from '../shared/models/HotelDto';
import {Constants} from '../../Constants';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private url = `${Constants.apiUrl}/api/hotels`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<HotelDto[]> {
    return this.http.get<HotelDto[]>(`${this.url}`);
  }

  getById(id: number): Observable<HotelDto> {
    return this.http.get<HotelDto>(`${this.url}/${id}`);
  }

}
