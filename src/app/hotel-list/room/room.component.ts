import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoomDto} from '../../shared/models/RoomDto';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  @Output() onCloseRoom = new EventEmitter<any>();
  @Input() roomDto: RoomDto;

  constructor() {
  }

  ngOnInit(): void {

  }

  closeRoom() {
    this.onCloseRoom.emit();
  }

  rentRoom() {
    console.log(`rentRoom(${this.roomDto.id})`);
  }

}
