import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HotelDto} from '../../shared/models/HotelDto';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss']
})
export class HotelItemComponent implements OnInit {

  @Output() onOpenSelectedHotel = new EventEmitter<any>();
  @Input() hotelDto: HotelDto;

  constructor() {
  }

  ngOnInit(): void {
  }

  getCounter(num: number): Array<number> {
    return new Array(num);
  }

  selectHotel(id: number) {
    this.onOpenSelectedHotel.emit(id);
  }
}
