import {HotelDto} from './HotelDto';

export interface RoomDto {
  id: number;
  number: number;
  price: number;
  isAvailable: boolean;
  hotelDto: HotelDto;
}
