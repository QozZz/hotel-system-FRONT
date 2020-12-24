import {Injectable} from '@angular/core';
import {Constants} from '../../Constants';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RentRoomDto} from '../shared/models/RentRoomDto';
import {ScheduleDto} from '../shared/models/Schedule';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private url = `${Constants.apiUrl}/api/schedules`;

  constructor(
    private http: HttpClient
  ) {
  }

  rentRoom(rentRoomDto: RentRoomDto): Observable<ScheduleDto> {
    return this.http.post<ScheduleDto>(this.url, rentRoomDto, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('Authorization'),
      })
    });
  }

}
