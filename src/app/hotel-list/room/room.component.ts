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
  rentRoomFormOpen = false;

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
    console.log('rentRoomDto.id:', rentRoomDto.roomId);
    this.scheduleService.rentRoom(rentRoomDto).subscribe(schedule => {
      console.log('schedule::', schedule);
    });
    this.rentRoomFormOpen = !this.rentRoomFormOpen;
  }

}
