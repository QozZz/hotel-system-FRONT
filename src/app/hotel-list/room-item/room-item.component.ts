import {Component, Input, OnInit} from '@angular/core';
import {RoomDto} from '../../shared/models/RoomDto';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements OnInit {

  @Input() roomDto: RoomDto;

  constructor() {
  }

  ngOnInit(): void {
  }

  rentRoom(roomId: number) {
    console.log(`rentRoom(${roomId})`);
  }
}
