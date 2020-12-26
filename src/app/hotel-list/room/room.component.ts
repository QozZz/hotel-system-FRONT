import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoomDto} from '../../shared/models/RoomDto';
import {RentRoomDto} from '../../shared/models/RentRoomDto';
import {ScheduleService} from '../../services/schedule.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  @Output() onCloseRoom = new EventEmitter<any>();
  @Input() roomDto: RoomDto;
  successRentBlockOpen = false;
  errorRentBlockOpen = false;
  rentBlockMessage = '';

  constructor(
    private scheduleService: ScheduleService
  ) {
  }

  ngOnInit(): void {
    console.log('RoomComponent');
  }

  closeRoom() {
    this.onCloseRoom.emit();
  }

  rentRoom(rentRoomDto: RentRoomDto) {
    rentRoomDto.roomId = this.roomDto.id;
    this.scheduleService.rentRoom(rentRoomDto).subscribe(schedule => {
      this.rentBlockMessage = `${rentRoomDto.rentStart} - ${rentRoomDto.rentEnd}`;
      this.successRentBlockOpen = true;
      this.closeRentSucErrBlock();
    }, error => {
      console.log(error);
      console.log(error.error.message);

      this.rentBlockMessage = error.error.message;

      this.errorRentBlockOpen = true;
      this.closeRentSucErrBlock();
    });
  }

  closeRentSucErrBlock() {
    setTimeout(() => {
      this.successRentBlockOpen = false;
      this.errorRentBlockOpen = false;
      this.rentBlockMessage = '';
    }, 2000);
  }

}
