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

  starsFilterArr: number[];
  hasRestaurantFilter = false;
  hasPoolFilter = false;

  constructor(
    private hotelService: HotelService
  ) {
  }

  ngOnInit(): void {
    console.log('HotelListComponent');
    this.hotelService.getAll().subscribe(hotels => {
      this.hotelsCache = hotels;
      this.hotels = hotels;
    });
    this.starsFilterArr = [];
  }

  starsFilter(event: any) {
    const value = Number(event.target.value);
    console.log(value);
    if (!this.starsFilterArr.includes(value)) {
      this.starsFilterArr.push(value);
    } else {
      this.starsFilterArr.splice(this.starsFilterArr.indexOf(value), 1);
    }
    this.filter();
  }

  restaurantFilter() {
    this.hasRestaurantFilter = !this.hasRestaurantFilter;
    console.log(this.hasRestaurantFilter);
    // this.filter();
  }

  poolFilter() {
    this.hasPoolFilter = !this.hasPoolFilter;
    console.log(this.hasPoolFilter);
    // this.filter();
  }

  filter() {
    if (this.starsFilterArr.length === 0) {
      this.hotels = this.hotelsCache;
    } else {
      this.hotels = this.hotelsCache
        .filter(value => this.starsFilterArr.includes(value.stars));
    }

    // if (this.hasRestaurantFilter === true) {
    //   this.hotels = this.hotelsCache
    //     .filter(hotel => hotel.hasRestaurant === this.hasRestaurantFilter);
    // }
    //
    // if (this.hasPoolFilter === true) {
    //   this.hotels = this.hotelsCache
    //     .filter(hotel => hotel.hasPool === this.hasPoolFilter);
    // }
  }

  getCounter(num: number): Array<number> {
    const counter: Array<number> = [];
    for (let i = num; i <= num + 2; i++) {
      counter.push(i);
    }
    return counter;
  }
}
