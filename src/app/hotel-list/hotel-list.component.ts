import {Component, OnInit} from '@angular/core';
import {HotelService} from '../services/hotel.service';
import {HotelDto} from '../shared/models/HotelDto';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  hotelsCache: HotelDto[];
  hotels: HotelDto[];

  starsFilter: number[];

  constructor(
    private hotelService: HotelService
  ) {
  }

  ngOnInit(): void {
    this.hotelService.getAll().subscribe(hotels => {
      this.hotelsCache = hotels;
      this.hotels = hotels;
    }, error => console.log(error));
    this.starsFilter = [];
  }

  addStarsFilter(event: any) {
    const value = Number(event.target.value);
    if (!this.starsFilter.includes(value)) {
      this.starsFilter.push(value);
    } else {
      this.starsFilter.splice(this.starsFilter.indexOf(value), 1);
    }
    this.filter();
  }

  filter() {
    if (this.starsFilter.length === 0) {
      this.hotels = this.hotelsCache;
    } else {
      this.hotels = this.hotelsCache
        .filter(value => this.starsFilter.includes(value.stars));
    }
  }

}
