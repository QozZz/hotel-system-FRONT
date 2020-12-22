import {RoomDto} from './RoomDto';

export interface ScheduleDto {
  id: number;
  roomDto: RoomDto;
  userEmail: string;
  rentStart: Date;
  rentEnd: Date;
}
