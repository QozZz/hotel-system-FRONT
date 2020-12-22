import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HotelDto} from '../../shared/models/HotelDto';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss']
})
export class HotelItemComponent implements OnInit {

  @Input() hotelDto: HotelDto;

  constructor() {
  }

  ngOnInit(): void {
    console.log('HotelItemComponent');
  }

  getCounter(num: number): Array<number> {
    return new Array(num);
  }

}
