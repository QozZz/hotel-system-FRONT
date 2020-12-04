import {Component, OnInit} from '@angular/core';
import {HotelService} from '../services/hotel.service';
import {Hotel} from '../shared/models/Hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  hotels: Hotel[];

  constructor(private hotelService: HotelService) {
  }

  ngOnInit(): void {
    this.hotelService.getAll()
      .subscribe(hotels => this.hotels = hotels, error => console.log(error));
  }

}
