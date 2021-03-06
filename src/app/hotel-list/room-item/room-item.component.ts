import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoomDto} from '../../shared/models/RoomDto';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements OnInit {

  @Output() onOpenSelectedRoom = new EventEmitter<any>();
  @Input() roomDto: RoomDto;

  constructor() {
  }

  ngOnInit(): void {
    console.log('RoomItemComponent');
  }

  selectRoom(id: number) {
    console.log('ID:::', id);
    this.onOpenSelectedRoom.emit(id);
  }
}
