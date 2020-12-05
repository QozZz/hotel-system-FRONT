import {Component, OnInit} from '@angular/core';
import {HotelService} from '../../services/hotel.service';
import {Hotel} from '../../shared/models/Hotel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  hotel: Hotel;

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.getHotel();
  }

  getHotel() {
    this.hotelService.getById(this.route.snapshot.params.id)
      .subscribe(hotel => this.hotel = hotel, error => console.log(error));
  }

}
