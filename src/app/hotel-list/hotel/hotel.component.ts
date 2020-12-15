import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HotelDto} from '../../shared/models/HotelDto';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  @Output() onCloseHotel = new EventEmitter<any>();
  @Input() hotelDto: HotelDto;
  isRoomsBlockOpened = false;

  constructor() {
  }

  ngOnInit(): void {

  }

  roomListBlockToggle() {
    this.isRoomsBlockOpened = !this.isRoomsBlockOpened;
  }

  closeHotel() {
    this.onCloseHotel.emit();
  }

}
