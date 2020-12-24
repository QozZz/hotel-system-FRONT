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
      if (error.status === 412) {
        this.rentBlockMessage = `${rentRoomDto.rentStart} - ${rentRoomDto.rentEnd} already taken`;
      } else {
        this.rentBlockMessage = 'Fill Dates';
      }

      this.errorRentBlockOpen = true;
      this.closeRentSucErrBlock();
    });
  }

  closeRentSucErrBlock() {
    setTimeout(() => {
      this.successRentBlockOpen = false;
      this.errorRentBlockOpen = false;
      this.rentBlockMessage = '';
    }, 5000);
  }

}
