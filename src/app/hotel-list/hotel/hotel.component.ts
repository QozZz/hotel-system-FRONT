import {Component, OnInit} from '@angular/core';
import {HotelService} from '../../services/hotel.service';
import {HotelDto} from '../../shared/models/HotelDto';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  isRoomsBlockOpened = false;
  hotelDto: HotelDto;

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.hotelService.getById(this.route.snapshot.params.id)
      .subscribe(hotelDto => this.hotelDto = hotelDto, error => console.log(error));
  }

  roomListBlockToggle() {
    this.isRoomsBlockOpened = !this.isRoomsBlockOpened;
  }

}
