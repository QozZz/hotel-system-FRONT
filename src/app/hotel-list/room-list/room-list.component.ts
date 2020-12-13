import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoomDto} from '../../shared/models/RoomDto';
import {RoomService} from '../../services/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  @Output() onCloseRoomListBlock = new EventEmitter<any>();
  @Input() hotelId: number;
  rooms: RoomDto[];

  constructor(
    private roomService: RoomService
  ) {
  }

  ngOnInit(): void {
    this.roomService.getAllByHotelId(this.hotelId).subscribe(rooms => {
      this.rooms = rooms;
    }, error => console.log(error));
  }

  closeRoomListBlock() {
    this.onCloseRoomListBlock.emit();
  }
}
