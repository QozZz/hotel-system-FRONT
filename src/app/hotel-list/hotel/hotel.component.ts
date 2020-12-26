import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HotelDto} from '../../shared/models/HotelDto';
import {ActivatedRoute, Router} from '@angular/router';
import {HotelService} from '../../services/hotel.service';
import {animate, state, style, transition, trigger, useAnimation} from '@angular/animations';
import {jello} from 'ng-animate';


@Component({
    selector: 'app-hotel',
    templateUrl: './hotel.component.html',
    styleUrls: ['./hotel.component.scss'],
    animations: [
        trigger('jello-card', [
            transition('true => false', useAnimation(jello, {
                params: {timing: 1, delay: 0}
            })),
            transition('false => true', useAnimation(jello, {
                params: {timing: 1, delay: 0}
            }))
        ])
    ]
})
export class HotelComponent implements OnInit {

    @Output() onCloseHotel = new EventEmitter<any>();
    hotelDto: HotelDto;
    openRoomList = false;
    populationCard = true;
    roomTypesCard = true;

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
