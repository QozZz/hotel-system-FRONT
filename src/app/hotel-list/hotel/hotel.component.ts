import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HotelDto} from '../../shared/models/HotelDto';
import {ActivatedRoute, Router} from '@angular/router';
import {HotelService} from '../../services/hotel.service';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  @Output() onCloseHotel = new EventEmitter<any>();
  hotelDto: HotelDto;
  openRoomList = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hotelService: HotelService
  ) {
  }

  ngOnInit(): void {
    console.log('HotelComponent');
    this.route.params.subscribe(params => {
      console.log(params);
      this.hotelService.getById(Number(params.hotelId)).subscribe(hotel => {
        console.log('Hotel: ', hotel);
        this.hotelDto = hotel;
      }, error => {
        console.log(error);
        this.router.navigate(['/hotels']);
      });
    });
  }

  roomListBlockToggle() {
    this.openRoomList = !this.openRoomList;
  }

  closeHotel() {
    this.onCloseHotel.emit();
  }

}
