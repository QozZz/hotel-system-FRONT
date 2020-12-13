import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Constants} from '../../Constants';
import {RoomDto} from '../shared/models/RoomDto';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private url = `${Constants.apiUrl}/api/rooms`;

  constructor(private http: HttpClient) {
  }

  getAllByHotelId(hotelId: number): Observable<RoomDto[]> {
    console.log(`${this.url}/hotel/${hotelId}`);
    return this.http.get<RoomDto[]>(`${this.url}/hotel/${hotelId}`);
  }

  getById(id: number): Observable<RoomDto> {
    return this.http.get<RoomDto>(`${this.url}/${id}`);
  }

}
