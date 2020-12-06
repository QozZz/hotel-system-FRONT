import {Component, OnInit} from '@angular/core';
import {HotelService} from '../services/hotel.service';
import {Hotel} from '../shared/models/Hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  hotelsCache: Hotel[];
  hotels: Hotel[];

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

  getCounter(num: number): Array<number> {
    return new Array(num);
  }

  addStarsFilter(event: any) {
    const value = Number(event.target.value);
    console.log(this.starsFilter);
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
    console.log(this.hotels);
  }

}
