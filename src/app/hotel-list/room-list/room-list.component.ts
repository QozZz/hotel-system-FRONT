import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoomDto} from '../../shared/models/RoomDto';
import {RoomService} from '../../services/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  roomSelected = false;

  @Output() onCloseRoomListBlock = new EventEmitter<any>();
  @Input() hotelId: number;
  @Input() roomsCache: RoomDto[];
  @Input() rooms: RoomDto[];
  roomDto: RoomDto;

  constructor(
    private roomService: RoomService
  ) {
  }

  ngOnInit(): void {
    this.roomService.getAllByHotelId(this.hotelId).subscribe(rooms => {
      this.roomsCache = rooms;
      this.rooms = rooms;
    });
  }

  closeRoomListBlock() {
    this.onCloseRoomListBlock.emit();
  }

  openSelectedRoom(id: number) {
    this.roomSelected = !this.roomSelected;
    this.roomDto = this.roomsCache
      .find(value => value.id = id);
  }

}
